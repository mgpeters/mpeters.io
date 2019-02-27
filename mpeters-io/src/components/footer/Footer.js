import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="app-footer">
          <div className="app-footer__contact-info">
            <div className="app-footer__contact-info--details">
           ... 
            </div>
          </div>
          <SocialLinks/>
        </footer>
      </div>
    );
  }
}

export default Footer;