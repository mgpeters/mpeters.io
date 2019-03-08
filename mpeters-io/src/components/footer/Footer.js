import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="app-footer">
          <div className="app-footer__contact-info">
            <div className="app-footer__contact-info--details">
           ... 
            </div>
          </div>
          <SocialLinks/>
        </section>
      </footer>
    );
  }
}

export default Footer;