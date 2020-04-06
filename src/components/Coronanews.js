import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Table from '../components/Table';
import Typography from '@material-ui/core/Typography'

const darkBlue = lightBlue[900]


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
			usa: [],
			error: false,
			errorMessage: "Hmm double check your spelling and make sure you capitalize properly. Then try again with a valid country name.",
			searchSuccess: false,
			data: []
		};
	}

	componentDidMount() {
		fetch("https://api.covid19api.com/summary")
			.then(res =>
				res.json()
			)
			.then(
				(result) => {
					console.log("This is the data", result)
					// if (result["Error Message"]) {
					// 	currentComponent.setState({
					// 		error: true,
					// 		searchSuccess: false,
					// 	});
					// 	return;
					// }
					// else {
					this.setState({
						data: result,
						ww: [result["Global"]["NewConfirmed"], result["Global"]["TotalConfirmed"], result["Global"]["NewDeaths"], result["Global"]["TotalDeaths"], result["Global"]["NewRecovered"], result["Global"]["TotalRecovered"]],
						usa: [result["Countries"][233]],
						spain: [result["Countries"][205]],
						italy: [result["Countries"][106]],
						germany: [result["Countries"][79]],
						china: [result["Countries"][44]],
					}, () => {
						this.setState({
							searchSuccess: true,
							error: false
						})

					});


					// }
					console.log("USA Result", result["Countries"][233])
					console.log("Spain Result", result["Countries"][205])
					console.log("Italy Result", result["Countries"][106])
					console.log("Germany Result", result["Countries"][79])
					console.log("China Result", result["Countries"][44])
				}
			)
	}

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
					console.log(countryInfo)
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
		return (
			<Container maxWidth={"md"}>
				{this.state.searchSuccess ? (
					<Table
						wwncases={this.state.ww[0]}
						wwcases={this.state.ww[1]}
						wwndeaths={this.state.ww[2]}
						wwdeaths={this.state.ww[3]}
						wwnrecovered={this.state.ww[4]}
						wwrecovered={this.state.ww[5]}
						usa={this.state.usa[0]}
						spain={this.state.spain[0]}
						italy={this.state.italy[0]}
						germany={this.state.germany[0]}
						china={this.state.china[0]}
					></Table>
				)
					: null
				}

				<h2 align="center">Search Country.</h2>
				<form align="center" noValidate autoComplete="off">
					<TextField style={{ marginRight: "20px" }} id="standard-basic" label="Country" name="country" onChange={this.handleInputChange} />
					<Button style={{ backgroundColor: darkBlue, color: "white", marginTop: "10px" }} onClick={() => this.searchCases()} variant="contained">Search</Button>
					{this.state.countryDataLoaded === true ? (
						<Container maxWidth={'sm'} align="left">
							<Typography variant="h6">Based on Johns Hopkins University Center for Systems Science and Engineering</Typography>
							<Typography variant="body1">
								{this.state.country} New Confirmed Cases: {this.state.countryData["NewConfirmed"]}
								</Typography>
								<Typography variant="body1">
								{this.state.country} Total Confirmed Cases: {this.state.countryData["TotalConfirmed"]}
								</Typography>
								<Typography variant="body1">
								{this.state.country} New Deaths: {this.state.countryData["NewDeaths"]}
								</Typography>
								<Typography variant="body1">
								{this.state.country} Total Deaths: {this.state.countryData["TotalDeaths"]}
								</Typography>
								<Typography variant="body1">
								{this.state.country} New Recovering Cases: {this.state.countryData["NewRecovered"]}
								</Typography>
								<Typography variant="body1">
								{this.state.country} Total Recovered Cases: {this.state.countryData["TotalRecovered"]}
							</Typography>
						</Container>
					)
						: null
					}
					{this.state.error === true ? (
						<p>{this.state.errorMessage}</p>
					)
						: null
					}
				</form>
			</Container>
		);
	}
}


export default Coronanews;


