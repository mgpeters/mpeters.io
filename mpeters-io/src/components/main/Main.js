import React, { Component } from 'react';

function MainContent (props) {
  return (
    <div className="main-content">
      <p>I'm a self-taught web designer and developer currently living
      in New York, NY.</p>

      <p>I bring an eye for visual and user interaction design to
      every project. I'm always looking to learn new skills and
      play with new technologies. I'm available for freelance
        work remotely or on-site in New York Metro Area area.</p>

      <p>In addition to my web dev skills, I have a very diverse 
      background outside of the tech field. Click on "about" to hear my story.</p>
    </div>
  );
}
class Main extends Component {
  render() {
    return (
      <div className="main">
        <MainContent />
      </div>
    );
  }
}

export default Main;