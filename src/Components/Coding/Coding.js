import React, { Component } from 'react';

import Project from './Project';

import './coding.css';

import projects from './projects.js';

class Coding extends Component {
  render() {
    return (
      <div className="Coding">
        {projects.map(project => <Project project={project}/>)}
      </div>
    );
  }
}

export default Coding;
