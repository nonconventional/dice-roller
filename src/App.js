import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    numSides: 0,
  };

  handleChange = event => {
    this.setState({
      numSides: event.target.value,
    });
  };

  render() {
    const numSides = this.state.numSides;

    return (
      <div className="App">
        <select onChange={this.handleChange} value={numSides}>
          <option value={0}>Select a Dice</option>
          <option value={4}>D4</option>
          <option value={6}>D6</option>
          <option value={8}>D8</option>
          <option value={10}>D10</option>
          <option value={12}>D12</option>
          <option value={20}>D20</option>
        </select>
      </div>
    );
  }
}

export default App;
