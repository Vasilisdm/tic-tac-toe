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
    const history = this.state.history.slice(0, this.state.stepNumber+1);
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
      /**
       * Ensures that the game won't get stuck showing the same move, 
       * after a new move has been made.
       */
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step%2) === 0 
    });
  }

  render() {
    const history = this.state.history;
    // Rendering the currently selected move
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 
        `Go to move #${move}` :
        `Go to game start`
        return(
          <li key={move}>
            <button onClick={() =>this.jumpTo(move)}>{desc}</button>
          </li>
        )
    });
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
          <h3>{status}</h3>
          <ol>{moves}</ol>
        </section>

      </div>
    );
  }
}

export default TicTac;
