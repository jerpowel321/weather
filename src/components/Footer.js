import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { grey } from '@material-ui/core/colors';
let white = grey[100]

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: '#152238',
    height: "100px",
    marginTop: "-100px",
  },
  nav: {
    color: white
  }

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
    >
     
    </BottomNavigation>
  );
}