import React, { Component } from 'react';
import {start} from './start.js';
import Cell from './Cell.js';
import './Snake.css';

class Snake extends Component {
    constructor(props){
        super(props);
        this.state = {
            gridSize: start[0].length-1,
            go: false,
            ate: false,
            matrix: start,
            direction: "down",
            headY: 1,
            headX: 9,
            positions: [[1,9], [0,9]],
            timer: null,
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.move = this.move.bind(this);
        this.placeApple = this.placeApple.bind(this);
    }
    componentDidMount() {
        this.placeApple();
        window.addEventListener('keydown', this.handleKeyPress)
    }

    go(){
        this.setState({go: true});
        this.setState({timer: setInterval(() => this.move(), this.props.speed)});
    }

    gameOver(){
        clearInterval(this.state.timer);
        window.alert(`Game Over! \n SCORE: ${this.props.score}`);
    }

    placeApple() {
        let randX;
        let randY;
        let matrix = this.state.matrix;
        const randomize = () => {
            randX = Math.round(Math.random()*this.state.gridSize);
            randY = Math.round(Math.random()*this.state.gridSize);
        }
        randomize();
        if (matrix[randY][randX] == 0) {
            matrix[randY][randX] = 2;
            this.setState({matrix});
        } else this.placeApple();
    }

    move(){
        let headX = this.state.headX;
        let headY = this.state.headY;
        let positions = this.state.positions;
        let matrix = this.state.matrix;
        let ate = false;

        //change values for head
        switch(this.state.direction){
            case 'down':
                headY++;
                if (headY > this.state.gridSize){
                    if (this.props.wrap) {headY = 0} else {this.gameOver()}
                }
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'up':
                headY--;
                if (headY < 0){
                    if (this.props.wrap) {headY = this.state.gridSize} else {this.gameOver()}
                }
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'right':
                headX++;
                if (headX > this.state.gridSize){
                    if (this.props.wrap) {headX = 0} else {this.gameOver()}
                }
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
            case 'left':
                headX--;
                if (headX < 0){
                    if (this.props.wrap) {headX = this.state.gridSize} else {this.gameOver()}
                }
                if (matrix[headY][headX] == 1) this.gameOver();
                break;
        }

        //check if snake has eaten
        if (matrix[headY][headX] == 2) {
            ate = true;
            this.props.addPoints(5+parseInt(this.state.positions.length/5));
            this.placeApple();
        }
        //remove previous tail
        let tailY = positions[positions.length-1][0];
        let tailX = positions[positions.length-1][1];
        if (!ate){
            matrix[tailY][tailX] = 0;
            positions.pop();
        }
                
        //add new head
        matrix[headY][headX] = 1;
        positions.unshift([headY, headX]);
        this.setState({headX, headY, tailX, tailY, matrix, positions});
    }

    handleKeyPress = (e) => {
        let direction = this.state.direction;
        switch(e.keyCode){
            case 32:
                if (!this.state.go) this.go(this.state.timer);
                break;
            case 40:
                if (direction != 'up') direction = 'down';
                break;
            case 83:
                if (direction != 'up') direction = 'down';
                break;
            case 38:
                if (direction != 'down') direction = 'up';
                break;
            case 87:
                if (direction != 'down') direction = 'up';
                break;
            case 39:
                if (direction != 'left') direction = 'right';
                break;
            case 68:
                if (direction != 'left') direction = 'right';
                break;
            case 37:
                if (direction != 'right') direction = 'left';
                break;
            case 65:
                if (direction != 'right') direction = 'left';
                break;
        }
        this.setState({direction});
    }

    render() {
        return (
            <div className="Snake-Snake">
            {this.state.matrix.map((row) => (
                row.map((cell) => (
                    <Cell value={cell}/>
                ))
            ))}
        </div>
        );
    }
}

export default Snake;
