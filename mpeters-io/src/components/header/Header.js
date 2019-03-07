import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navigation (props) {
    return (
      <nav className="navigation">
        <ul className="navigation__list">
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/portfolio'>portfolio</Link></li>
          <li><Link to='/resume'>resume</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>
      </nav>
    );
}
class Header extends Component {
  render() {
    return (
      <header className="header">
        <section className="App-header">
          <h1 className='header-text'><Link to='/'>mpeters.io</Link></h1>
          <Navigation />
        </section>
      </header>
    );
  }
}

export default Header;