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
  componentDidMount(){
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    let colors = ["rgb(194,194,235)", "rgb(141,141,200)", "rgb(80,80,160)"];
    ctx.globalAlpha = 1;
    ctx.fillStyle= 'white';
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    ctx.globalAlpha = 0.15;
    for (let i=0; i<250; i++){
      let n = Math.round(Math.random()*colors.length);
      let color = colors[n];
      let radius = (Math.random()+.05)*100;
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.ellipse(Math.random()*window.innerWidth,Math.random()*window.innerHeight,radius,radius,0,0,2*Math.PI);
      ctx.fill();
    }
  }
  render() {
    return (
      <div className="App">
        <canvas ref="canvas" className="Background" width={window.innerWidth} height={window.innerHeight}/>
        <div className="Body">
          <div className="Name">Ellen Nitchals</div>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/code" component={Coding}/>
            <Route path="/writing" component={Writing}/>
            <Route path="/art" component={Art}/>
            <Route path="/resume" component={Resume}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
