import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Table from '../components/Table';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import Barchart from "../components/Barchart"
import { withStyles } from "@material-ui/core/styles";

const darkRed = red[900]
const darkBlue = lightBlue[900]


const styles = theme => ({
	p: {
		color: "#f8fcfd",
		paddingTop: "10px"
	},
	textfield: {
		marginRight: "20px",
		color: "white",
	},
	multilineColor: {
		color: 'white',
	},
});

class Coronanews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			country: '',
			countryData: [],
			countryDataLoaded: false,
			ww: [],
			china: [],
			italy: [],
			spain: [],
			germany: [],
			usa: [],
			error: false,
			errorMessage: "Double check your spelling and make sure you capitalize properly. Then try again with a valid country name.",
			searchSuccess: false,
			data: []
		};
	}

	// componentDidMount() {
	// 	fetch("https://api.covid19api.com/summary")
	// 		.then(res =>
	// 			res.json()
	// 		)
	// 		.then(
	// 			(result) => {
	// 				this.setState({
	// 					data: result,
	// 					ww: [result["Global"]["NewConfirmed"], result["Global"]["TotalConfirmed"], result["Global"]["NewDeaths"], result["Global"]["TotalDeaths"], result["Global"]["NewRecovered"], result["Global"]["TotalRecovered"]]
	// 				}, () => {
	// 					if (this.state.ww.length > 0) {
	// 						for (let j = 0; j < 5; j++) {
	// 							for (let i = 0; i < this.state.data["Countries"].length; i++) {
	// 								if (this.state.data["Countries"][i]["Country"] === "China" && j===4) {
	// 									let countryInfo = this.state.data["Countries"][i];
	// 									this.setState({
	// 										error: false,
	// 										china: countryInfo,
	// 										searchSuccess: true,
	// 									})
	// 								}
	// 								if (this.state.data["Countries"][i]["Country"] === "United States of America") {
	// 									let countryInfo = this.state.data["Countries"][i];
	// 									this.setState({
	// 										error: false,
	// 										usa: countryInfo,
	// 									})
	// 								}
	// 								if (this.state.data["Countries"][i]["Country"] === "Spain") {
	// 									let countryInfo = this.state.data["Countries"][i];
	// 									this.setState({
	// 										error: false,
	// 										spain: countryInfo,
	// 									})
	// 								}
	// 								if (this.state.data["Countries"][i]["Country"] === "Italy") {
	// 									let countryInfo = this.state.data["Countries"][i];
	// 									this.setState({
	// 										error: false,
	// 										italy: countryInfo,
	// 									})
	// 								}
	// 								if (this.state.data["Countries"][i]["Country"] === "Germany") {
	// 									let countryInfo = this.state.data["Countries"][i];
	// 									this.setState({
	// 										error: false,
	// 										germany: countryInfo,
	// 									})
	// 								}
	// 							}
	// 						} 
	// 					}
	// 				}
	// 				);
	// 			}
	// 		)
	// }

	handleInputChange = (event) => {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
			countryDataLoaded: false,
			error: false,
		});
	}

	searchCases() {
		if (this.state.searchSuccess) {
			for (let i = 0; i < this.state.data["Countries"].length; i++) {
				if (this.state.data["Countries"][i]["Country"] === this.state.country) {
					let countryInfo = this.state.data["Countries"][i];
					this.setState({
						error: false,
						countryData: countryInfo,
						countryDataLoaded: true,
					})
					return;
				}
			}
			this.setState({
				error: true
			})
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container >
				{/* <Grid xs={12} sm={8} item>
					<Barchart
						wwncases={this.state.ww[0]}
						wwcases={this.state.ww[1]}
						wwndeaths={this.state.ww[2]}
						wwdeaths={this.state.ww[3]}
						wwnrecovered={this.state.ww[4]}
						wwrecovered={this.state.ww[5]}
						usa={this.state.usa}
						spain={this.state.spain}
						italy={this.state.italy}
						germany={this.state.germany}
						china={this.state.china}
					/>

				</Grid> */}
					<Grid xs={12} sm={8} item >
						<Container id="coronanews" align="center" style={{ padding: "20px 20px" }}>
							{this.state.searchSuccess ? (
								<Table
									wwncases={this.state.ww[0]}
									wwcases={this.state.ww[1]}
									wwndeaths={this.state.ww[2]}
									wwdeaths={this.state.ww[3]}
									wwnrecovered={this.state.ww[4]}
									wwrecovered={this.state.ww[5]}
									usa={this.state.usa}
									spain={this.state.spain}
									italy={this.state.italy}
									germany={this.state.germany}
									china={this.state.china}
								>

								</Table>
							)
								: null
							}
						</Container>
					</Grid>
					<Grid xs={12} sm={4} item>
						<Container align="center" >
							<Typography variant="h5" style={{ color: darkBlue, padding: "20px" }} align="center"><img width="45px" src="/pandemic.png" alt="World Pandemic" style={{paddingRight: "5px"}}></img>Search Country.</Typography>
							<form align="center" noValidate autoComplete="off" style={{paddingBottom: "20px"}}>
								<div style={{ padding: "10px" }}>
									<TextField style={{ marginRight: "20px" }} id="standard-basic" label="Country" name="country" onChange={this.handleInputChange} />
									<Button style={{ backgroundColor: darkBlue, color: "white", marginTop: "10px" }} onClick={() => this.searchCases()} variant="contained"><SearchIcon />Search</Button>
								</div>
								{this.state.countryDataLoaded === true ? (
									<Container align="center" className={classes.p}>
											<Typography align="left" variant="body1" >
											{this.state.country}
										</Typography>
										<Typography align="left" variant="body1" >
											New Confirmed Cases: {this.state.countryData["NewConfirmed"]}
										</Typography>
										<Typography align="left" variant="body1">
											Total Confirmed Cases: {this.state.countryData["TotalConfirmed"]}
										</Typography>
										<Typography align="left" variant="body1">
											New Deaths: {this.state.countryData["NewDeaths"]}
										</Typography>
										<Typography align="left" variant="body1">
											Total Deaths: {this.state.countryData["TotalDeaths"]}
										</Typography>
										<Typography align="left" variant="body1">
											New Recovering Cases: {this.state.countryData["NewRecovered"]}
										</Typography>
										<Typography align="left" variant="body1">
											Total Recovered Cases: {this.state.countryData["TotalRecovered"]}
										</Typography>
									</Container>
								)
									: null
								}
								{this.state.error === true ? (
									<Typography variant="subtitle1" style={{ color: darkRed, marginLeft: "10%", marginRight: "10%" }}>
										{this.state.errorMessage}
									</Typography>
								)
									: null
								}
							</form>
						</Container>
					</Grid>
					<Typography variant="body1" style={{ padding: "15px", color: "black" }}>Based on Johns Hopkins University Center for Systems Science and Engineering.</Typography>
				</Grid>
		);

	}
}

export default withStyles(styles, { withTheme: true })(Coronanews);
