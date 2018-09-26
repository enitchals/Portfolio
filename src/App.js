import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation.js';
import Coding from './Components/Coding/Coding.js';
import Writing from './Components/Writing/Writing.js';
import Art from './Components/Art/Art.js';
import Resume from './Components/Resume/Resume.js';
import About from './Components/About/About.js';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/code" component={Coding}/>
          <Route path="/writing" component={Writing}/>
          <Route path="/art" component={Art}/>
          <Route path="/resume" component={Resume}/>
        </Switch>
      </div>
    );
  }
}

export default App;
