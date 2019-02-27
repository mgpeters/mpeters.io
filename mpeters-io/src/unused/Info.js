import React, { Component } from 'react';
import TechUsed from './TechUsed';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <p>About this project</p>
        <TechUsed/>
      </div>
    );
  }
}

export default Info;