import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="Nav">
        <NavLink exact to="/" className="NavLink" activeClassName="NavLink--active">About Me</NavLink>
        <NavLink to="/resume" className="NavLink" activeClassName="NavLink--active">Resume</NavLink>
        <NavLink to="/art" className="NavLink" activeClassName="NavLink--active">Art</NavLink>
        <NavLink to="/code" className="NavLink" activeClassName="NavLink--active">Coding</NavLink>
        <NavLink to="/writing" className="NavLink" activeClassName="NavLink--active">Writing</NavLink>
      </div>
    );
  }
}

export default App;
