import React, { Component } from 'react';
import SnakeApp from './SnakeApp.js';
import './Snake.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      highscore: 0,
      wrap: true,
      speed: 200,
    }
  }

  addPoints = (points) => {
    let score = this.state.score;
    score += points;
    this.setState({score})
  }

  render() {
    return (
      <div className="Snake-App">
        <div className="Snake-App--Title">SNEK</div>
        <div>The arcade classic!</div>
        <div>Press SPACE to start</div>
        <div>SCORE: {this.state.score}</div>
        
        <br/>

        <SnakeApp wrap={this.state.wrap} score={this.state.score} addPoints={this.addPoints} speed={this.state.speed}/>
      </div>
    );
  }
}

export default App;
