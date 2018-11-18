import React, { Component } from 'react';
import Board from './components/board.js';
import calculateWinner from './components/helpers/calculateWinner.js';

class TicTac extends Component {

  constructor(props){
    super(props);
    this.state = {
      // in order to be able to go in previous move
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  handleClick(i){
    const history = this.state.history;
    const current = history[history.length-1];
    const squares = current.squares.slice();
    /**
     * If there is a winner or the square is already written then,
     * ignore any further click on that particular square.
     */
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length-1];
    const winner = calculateWinner(current.squares);

    let status;

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className="tic-tac">

        <section className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
        </section>

        <section className="game-info">
          {status}
        </section>

      </div>
    );
  }
}

export default TicTac;
