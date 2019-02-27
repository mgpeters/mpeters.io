import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function TextInput (props){
    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input type="text" className={formControl} {...props} />
        </div>
    );
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
}

function TextArea (props){

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <textarea {...props} className={formControl} />
        </div>
    );
}

TextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
}

function Email (props){

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input type="email" className={formControl} {...props} />
        </div>
    );
}

Email.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
}

function Select (props){

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <select className={formControl} value={props.value} onChange={props.onChange} name={props.name}>
                {props.options.map(option => (
                    <option value={option.value}>
                    {option.displayValue}
                </option>
                ))}
            </select>
        </div>
    );
}

Select.propTypes = {

}
class FormComponent extends Component { //https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825 2/22/19
    state = {
        formIsValid: false, //tracks the overall form validity
        formControls: {
            name: {
                value: '',
                placeholder: 'What is your name',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 4,
                    isRequired: true //add if required
                }
            },
            email: {
                value: '',
                placeholder: 'What is your email',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 3,
                    isRequired: true //add if required
                }
            },
            textarea: {
                value: '',
                placeholder: 'What is your message',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 3,
                    isRequired: true //add if required
                }
            }
        }
    };

    formSubmitHandler = this.formSubmitHandler.bind(this); //cant use async with an arrow, needed to .bind()

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;

        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });
    }

    validate = (value, rules) => {
        let isValid = true;

        for (let rule in rules) {
            switch (rule) {
                case 'minLength': isValid = isValid && this.minLengthValidator(value, rules[rule]); //may have to .bind() watch out
                    break;
                case 'isRequired': isValid = isValid && this.requiredValidator(value); //may have to .bind() watch out
                    break;
                case 'isEmail': isValid = isValid && this.emailValidator(value); //may have to .bind() watch out
                    break;
                default: isValid = true;
            }
        }
        return isValid;
    }

    minLengthValidator = (value, minLength) => {
        return value.length >= minLength;
    }

    requiredValidator = value => {
        return value.trim() !== '';
    }

    emailValidator = value => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //deleted escape keys ""//"" watch out

        return re.test(String(value).toLowerCase());
    }

    async formSubmitHandler(){
        const formData = {};

        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }

        console.dir(formData); //here is where you would do the back end submission

        const formSubmit = await axios.post('../../../api/form', formData)
        //console.log(formSubmit);
    }

    render() {
        return (
            <div>
                <TextInput
                    name="name"
                    placeholder={ this.state.formControls.name.placeholder }
                    value={ this.state.formControls.name.value }
                    onChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid} />

                <Email
                    name="email"
                    placeholder={this.state.formControls.email.placeholder}
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid} />

                <TextArea
                    name="textarea"
                    placeholder={this.state.formControls.textarea.placeholder}
                    value={this.state.formControls.textarea.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.textarea.touched}
                    valid={this.state.formControls.textarea.valid} />

                <button
                    onClick={this.formSubmitHandler}
                    disabled={!this.state.formIsValid}>
                    Submit
                </button>
            </div>
        );
    }
}

export default FormComponent;