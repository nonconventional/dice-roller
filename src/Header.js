import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = props => {
  return (
    <AppBar position="absolute" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Dice Roller
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
