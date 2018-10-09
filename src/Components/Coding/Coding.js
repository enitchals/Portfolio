import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Project from './Project';

import Snake from './Projects/Snake/Snake.js';
import MontyHall from './Projects/MontyHall/MontyHall.js';
import CircleGen from './Projects/CircleGen/CircleGen.js';
import ClosetRoulette from './Projects/External/ClosetRoulette.js';

import './coding.css';

import projects from './projects.js';

class Coding extends Component {
  render() {
    return (
      <div className="Coding">
        <Switch>
          <Route path="/code/snake" component={Snake}/>
          <Route path="/code/montyhall" component={MontyHall}/>
          <Route path="/code/circlegen" component={CircleGen}/>
          <Route path="/code/closetroulette" component={ClosetRoulette}/>
        </Switch>
        {projects.map(project => <Project project={project}/>)}
      </div>
    );
  }
}

export default Coding;
