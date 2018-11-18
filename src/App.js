import React, { Component } from 'react';
import Board from './components/board.js';

class TicTac extends Component {

  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  render() {
    return (
      <div className="tic-tac">
          <Board squares={this.state.squares}/>
      </div>
    );
  }
}

export default TicTac;
