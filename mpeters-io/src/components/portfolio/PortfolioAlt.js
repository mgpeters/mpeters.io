import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioData from '../../data/portfolioData.json';
import ThumbPhoto from './ThumbPhoto';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Photo (props) {
    return (
        <div className="portfolio-photo">
            <img className="portfolio-photo__current" src={props.originalPhoto} alt={props.projectName + ` photo`}/>
        </div>
    );
}

Photo.propTypes = {
    originalPhoto: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired
}

class PortfolioAlt extends Component {
    state = {
        data: this.props.data,
        portfolioData: PortfolioData,
        currentSelection: PortfolioData[1],
        display: 'display-block',
        show: false
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    }

    changeSelection = (event) => {
        this.setState( { currentSelection: event} )
        this.handleShow();
    };

    render() {
        return (
            <section className="portfolio">
                <div className="portfolio__wrap">
                    <h2 className="section-header">Portfolio</h2>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.state.currentSelection.name}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Photo
                                originalPhoto = { this.state.currentSelection.imageData.original }
                                projectName = { this.state.currentSelection.name }
                                />
                                <Button variant="secondary" href={this.state.currentSelection.links.gitHub} block>
                                    Github
                                </Button>
                                <Button variant="secondary" href={this.state.currentSelection.links.gitHub} block>
                                    Try Me!
                                </Button>
                                <section className="portfolio__infowindow--details">
                                    <h4 className="section-header">Developed for:</h4>
                                        <p>{ this.state.currentSelection.about.for} { this.state.currentSelection.about.program ? ' - ' + this.state.currentSelection.about.program : ''}</p>
                                    <h4 className="section-header">Tech Used:</h4>
                                        <ul className='infowindow__list'> { this.state.currentSelection.techUsed.map( (tech, key) => (<li key={ key }>{ tech }</li>)) }</ul>
                                    <h4 className="section-header">What I learned:</h4>
                                        <p>{ this.state.currentSelection.about.learned }</p>
                                    <h4 className="section-header">Issues encountered:</h4>
                                        <p>{ this.state.currentSelection.about.issues }</p>
                                </section>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                <div className="portfolio__past-projects">
                    <div className="portfolio__past-projects--thumbnail__wrap">
                    {this.state.portfolioData.map((data) => (
                        <ThumbPhoto
                            key= { data.name }
                            data = { data }
                            image = { data.imageData }
                            name = { data.name }
                            changeSelection = { this.changeSelection }
                            showModal = { this.showModal }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

PortfolioAlt.propTypes = {

}

export default PortfolioAlt;