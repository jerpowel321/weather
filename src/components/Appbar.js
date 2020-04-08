import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import indigo from '@material-ui/core/colors/indigo';
const darkIndigo = indigo[900]

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false
		};
	}
	menuClick = () => {
		if (this.state.menuOpen === true) {
			this.setState({
				menuOpen: false
			})
		}
		else
			this.setState({
				menuOpen: true
			})

	}
	render() {
		return (
			<AppBar id="nav" style={{ backgroundColor: darkIndigo }} position="sticky" >
				<Toolbar>
					<Grid container >
							<Grid id="navigation" container justify="flex-start" style={{ fontWeight: "bold" }}>
								<div id="name" >
									<Typography variant="h6" style={{ paddingRight: "30px", fontFamily: "Lato, sans-serif", color: "#FFFFFF" }}>
										Daily Weather, Stock and Coronavirus updates
              </Typography>
								</div>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}
};


