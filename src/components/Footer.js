import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { grey } from '@material-ui/core/colors';
let white = grey[100]
let darkgrey = grey[900]

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: darkgrey,
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