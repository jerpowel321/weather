import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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