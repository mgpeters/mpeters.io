import React, { Component } from 'react';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer.js';
import './App.css';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Route exact path='/' render={() => (
            <Main />
          )} />
          <Route exact path='/about' render={() => (
            <About />
          )} />
          <Route exact path='/portfolio' render={() => (
            <Portfolio />
          )} />
          <Route exact path='/resume' render={() => (
            <Resume />
          )} />
          <Route exact path='/contact' render={() => (
            <Contact />
          )} />
        <Footer/>
      </div>
    );
  }
}

export default App;
