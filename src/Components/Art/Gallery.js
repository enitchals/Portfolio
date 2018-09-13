import React, { Component } from 'react';

import './art.css';

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        {this.props.content}
      </div>
    );
  }
}

export default Gallery;
