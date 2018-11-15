import React, {Component} from 'react';

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.value}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
  