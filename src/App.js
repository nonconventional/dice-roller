import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    diceRolls: [],
    numDice: 1,
    numSides: 0,
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleRollClick = event => {
    event.preventDefault();

    const { numDice, numSides } = this.state;
    let diceRolls = [];

    for (let i = 0; i < numDice; i++) {
      const diceRoll = Math.floor(Math.random() * numSides) + 1;
      diceRolls.push(diceRoll);
    }

    this.setState({ diceRolls });
  };

  handleClearClick = event => {
    event.preventDefault();

    this.setState({ diceRolls: [] });
  };

  render() {
    const numDice = this.state.numDice;
    const numSides = this.state.numSides;
    const diceRolls = this.state.diceRolls;

    let total = 0;

    return (
      <div className="App">
        <form>
          <select name="numSides" onChange={this.handleChange} value={numSides}>
            <option value={0}>Select a Dice</option>
            <option value={4}>D4</option>
            <option value={6}>D6</option>
            <option value={8}>D8</option>
            <option value={10}>D10</option>
            <option value={12}>D12</option>
            <option value={20}>D20</option>
            <option value={100}>D100</option>
          </select>
          <br />
          <label htmlFor="numDice">
            {'Please Enter number of Dice you would like to roll:'}
          </label>
          <input
            id="numDice"
            name="numDice"
            min="1"
            max="10000"
            onChange={this.handleChange}
            type="number"
            value={numDice}
          />
          <br />
          <button type="submit" onClick={this.handleRollClick}>
            {'Roll the Dice! 😊'}
          </button>
          <button onClick={this.handleClearClick}>
            {'Clear previous rolls 😡'}
          </button>
        </form>
        <br />
        {diceRolls.length > 0 && (
          <React.Fragment>
            <span>{'Here bee yar rollss!!!'}</span>
            <br />
            {diceRolls.map((diceRoll, index) => {
              total += diceRoll;
              return (
                <React.Fragment>
                  <span>{'Dice Roll #' + (index + 1) + ': ' + diceRoll}</span>
                  <br />
                </React.Fragment>
              );
            })}
            <br />
            <span>
              <strong>{'Total: ' + total}</strong>
            </span>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
