import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ContactBootstrap extends Component {
    state ={

    }

    render() {
        return (
            <section className='contact-form'>
                <Form>
                    <Form.Row>
                        <Row>
                            <Col>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                    </Form.Row>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Type Your Message"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        )
    }
}

export default ContactBootstrap;