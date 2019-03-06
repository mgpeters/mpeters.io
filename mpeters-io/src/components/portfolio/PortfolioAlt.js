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
            <div className="portfolio">
                <div className="portfolio__wrap">
                    <h2>Portfolio</h2>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.state.currentSelection.name}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Photo
                                originalPhoto = { this.state.currentSelection.imageData.original }
                                projectName = { this.state.currentSelection.name }
                                />
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
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
        </div>
        )
    }
}

PortfolioAlt.propTypes = {

}

export default PortfolioAlt;