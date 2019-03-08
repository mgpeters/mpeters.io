import React, { Component } from 'react';
import PortfolioData from '../../data/portfolioData.json';
import ThumbPhoto from '../components/portfolio/ThumbPhoto';
import PropTypes from 'prop-types';

function Modal (props) {
  return (
    <div className={ 'modal ' + props.displayToggle }>
        <section className='modal-main'>
        <button className='closebutton' onClick={ props.handleClose }>
        </button>
          <InfoWindow
                currentSelection= { props.currentSelection }/>
        </section>
    </div>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  displayToggle: PropTypes.string.isRequired,
  currentSelection: PropTypes.object.isRequired
}

function InfoWindow (props) {
  return (
    <div className="portfolio__infowindow">
      <Photo
        originalPhoto = { props.currentSelection.imageData.original }
        projectName = { props.currentSelection.name }
      />
      <div className="portfolio__infowindow--details">
        <p>Developed for:</p>
          { props.currentSelection.about.for} { props.currentSelection.about.program ? ' - ' + props.currentSelection.about.program : ''}
        <p>Tech Used:</p>
          <ul className='infowindow__list'> { props.currentSelection.techUsed.map( (tech, key) => (<li key={ key }>{ tech }</li>)) }</ul>
        <p>What I learned:</p>
          {props.currentSelection.about.learned}
        <p>Isses encountered:</p>
          {props.currentSelection.about.issues}
      </div>
    </div>
  );
}

InfoWindow.propTypes = {
  currentSelection: PropTypes.object.isRequired
}

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

class Portfolio extends Component {
    state =  {
      portfolioData: PortfolioData,
      currentSelection: PortfolioData[1],
      display: 'display-block'
    }

  showModal = () => {
    this.setState({ display: 'display-block' })
  };

  hideModal = () => {
    this.setState({ display: 'display-none' })
  };

  changeSelection = (event) => {
    this.setState( { currentSelection: event} )
    this.showModal();
  };



  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__wrap">
          <h2 className='section-header'>Portfolio</h2>
            <Modal
              handleClose = { this.hideModal }
              displayToggle= { this.state.display }
              currentSelection = { this.state.currentSelection }>
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
    );
  }
}

export default Portfolio;