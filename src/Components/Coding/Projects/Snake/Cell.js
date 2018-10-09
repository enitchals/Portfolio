import React, { Component } from 'react';
import './Snake.css';

class Cell extends Component {
    render() {
        let type;
        if (this.props.value == 0) type="Snake-EmptyCell";
        if (this.props.value == 1) type="Snake-SnakeCell";
        if (this.props.value == 2) type="Snake-AppleCell";
        return (
            <div className={type}>
            </div>
        );
    }
}

export default Cell;
