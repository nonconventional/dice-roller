import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Header from './Header';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  content: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  textField: {
    margin: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

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
    const { numDice, numSides, diceRolls } = this.state;
    const { classes } = this.props;

    let total = 0;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Header />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Paper className={classes.paper}>
              <form>
                <Grid container spacing={8}>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      helperText="Select the Type of Dice"
                      id="num-sides"
                      label="Dice Type"
                      name="numSides"
                      onChange={this.handleChange}
                      required
                      select
                      value={numSides}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={4}>D4</MenuItem>
                      <MenuItem value={6}>D6</MenuItem>
                      <MenuItem value={8}>D8</MenuItem>
                      <MenuItem value={10}>D10</MenuItem>
                      <MenuItem value={12}>D12</MenuItem>
                      <MenuItem value={20}>D20</MenuItem>
                      <MenuItem value={100}>D100</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      id="num-dice"
                      inputProps={{
                        max: '10000',
                        min: '1',
                      }}
                      label="Number of Dice"
                      name="numDice"
                      onChange={this.handleChange}
                      required
                      type="number"
                      value={numDice}
                    />
                  </Grid>
                  <Grid item xs>
                    <Button
                      className={classes.button}
                      color="primary"
                      onClick={this.handleRollClick}
                      type="submit"
                      variant="contained"
                    >
                      {'Roll the Dice! 😊'}
                    </Button>
                    <Button
                      className={classes.button}
                      color="secondary"
                      onClick={this.handleClearClick}
                      variant="contained"
                    >
                      {'Clear previous rolls 😡'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>

            {diceRolls.length > 0 && (
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item xs={12}>
                    <span>{'Here bee yar rollss!!!'}</span>
                  </Grid>
                  {diceRolls.map((diceRoll, index) => {
                    total += diceRoll;
                    return (
                      <Grid iterm xs={12}>
                        <span>
                          {'Dice Roll #' + (index + 1) + ': ' + diceRoll}
                        </span>
                        <br />
                      </Grid>
                    );
                  })}
                  <Grid item xs={12}>
                    <span>
                      <strong>{'Total: ' + total}</strong>
                    </span>
                  </Grid>
                </Grid>
              </Paper>
            )}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
