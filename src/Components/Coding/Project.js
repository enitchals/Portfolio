import React, { Component } from 'react';
import './coding.css';

class Project extends Component {
  render() {
    return (
      <div className="project--card">
        <div className="project--name">{this.props.project.name}</div>
        <div className="project--description">{this.props.project.description}</div>
      </div>
    );
  }
}

export default Project;
