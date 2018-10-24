import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    numSides: 0,
    numDice: 1,
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const numSides = this.state.numSides;
    const numDice = this.state.numDice;

    return (
      <div className="App">
        <select name="numSides" onChange={this.handleChange} value={numSides}>
          <option value={0}>Select a Dice</option>
          <option value={4}>D4</option>
          <option value={6}>D6</option>
          <option value={8}>D8</option>
          <option value={10}>D10</option>
          <option value={12}>D12</option>
          <option value={20}>D20</option>
        </select>
        <br />
        <label htmlFor="numDice">
          {'Please Enter number of Dice you would like to roll:'}
        </label>
        <input
          id="numDice"
          name="numDice"
          min="1"
          onChange={this.handleChange}
          type="number"
          value={numDice}
        />
      </div>
    );
  }
}

export default App;
