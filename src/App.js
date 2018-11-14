import React, { Component } from 'react';
import Board from './components/board.js';

class TicTac extends Component {
  render() {
    return (
      <div className="tic-tac">
          <Board />
      </div>
    );
  }
}

export default TicTac;
