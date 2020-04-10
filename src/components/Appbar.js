import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
		backgroundColor: "#152238",
		border: "none",
		minHeight: "450px",
    width: "100%",
    borderBottomLeftRadius: "80% 80%",
    borderBottomRightRadius: "80% 80%",
    background: "#232323",
    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.36)"
	},
	h6: {
		fontFamily: "Lato, sans-serif",
		color: "#f2f9ff"
	},
	i: {
		color: "#9fcffb"
	}
});

class NavBar extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<AppBar id="nav" className={classes.root} position="sticky" >
				<Toolbar align="center" >
								{/* <Typography variant="h5" className={classes.h6}>
									Daily <i className={classes.i} className="fas fa-cloud"></i> Weather, Stock and Coronavirus updates
              </Typography> */}
				</Toolbar>
			</AppBar>
		);
	}
};

export default withStyles(styles, { withTheme: true })(NavBar);
