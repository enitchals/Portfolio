import React, { Component } from 'react';
import './coding.css';

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className="Project--name">{this.props.project.name}</div>
        <div className="Project--description">{this.props.project.description}</div>
      </div>
    );
  }
}

export default Project;
