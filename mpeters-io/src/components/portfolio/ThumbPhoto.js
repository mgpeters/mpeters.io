import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThumbPhoto extends Component {
  state = {
    data: this.props.data
  }

  render() {
    return (
      <div 
        onClick= { () => { this.props.changeSelection(this.state.data) } }
        className="portfolio__past-projects--thumbnail">
        <h3>{this.props.name}</h3>
        <img className="portfolio__past-projects--thumbnail__img" src={this.props.image.thumbnail ? this.props.image.thumbnail : this.props.image.thumbnailAlt} alt={this.props.image.name + ` thumbnail`}/>
      </div>
    );
  }
}

ThumbPhoto.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  changeSelection: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
}

export default ThumbPhoto;