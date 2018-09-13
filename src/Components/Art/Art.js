import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Gallery from './Gallery.js';

import './art.css';

const digital = "digital";
const painting = "painting";
const photos = "photos";

class Art extends Component {
  render() {
    return (
      <div className="Art">
        Art.
        <Switch>
          <Route path="/art/digital" render={props => <Gallery {...props} content={digital}/>}/>
          <Route path="/art/painting" render={props => <Gallery {...props} content={painting}/>}/>
          <Route path="/art/photos" render={props => <Gallery {...props} content={photos}/>}/>
        </Switch>
      </div>
    );
  }
}

export default Art;
