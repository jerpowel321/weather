import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Form from '../components/Form';
import Appbar from '../components/Appbar'
import Container from '@material-ui/core/Container';
import WeatherCard from '../components/Card';
import Typography from '@material-ui/core/Typography';
import lightBlue from '@material-ui/core/colors/lightBlue';

const darkBlue = lightBlue[900]


class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			woeid: 1000000,
			latt_long: "",
			error: false,
			isLoaded: false,
			weatherData: {},
			forecast: [],
			search: false,
			errorMessage: "Looks like we couldnt find that city. Try again.",
		};
	}
	callbackFunction = (childData) => {
		console.log("This is the childData", childData)
		this.setState({
			city: childData.city,
			search: childData.search
		})
		if (childData.search === true) {
			fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=" + childData.city)
				.then(res =>
					res.json()
				)
				.then(
					(result) => {
						console.log("This is the location", result)
						if (result.length === 0) {
							this.setState({
								error: true
							});
							return;
						}
						else {
							this.setState({
								isLoaded: true,
								city: result[0].title,
								woeid: result[0].woeid,
								latt_long: result[0].latt_long
							});
							console.log("This is the woeid", result[0].woeid)
							fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" + this.state.woeid)
								.then(res =>
									res.json()
								).then(
									(res) => {
										console.log("this is the data", res)
										console.log("This is the forecast", res.consolidated_weather)
										this.setState({
											weatherData: res,
											forecast: res.consolidated_weather,
											search: false,
											error: false
										});
									}
								)
						}
					},
					(error) => {
						this.setState({
							isLoaded: true,
							search: false,
							error
						});
					}
				)
		}
	}
	componentDidMount() {
		fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956")
			.then(res =>
				res.json()
			).then(
				(res) => {
					this.setState({
						weatherData: res,
						forecast: res.consolidated_weather,
						search: false
					});
				}
			)
	}

	render() {
		return (
			<div id="dashboard">
				<Appbar></Appbar>
				<Grid>
					<Form parentCallback={this.callbackFunction} />
				</Grid>
				<Grid>
					<Container maxWidth="lg" style={{paddingTop: "10px"}}>
						{this.state.error === true ? (
							<Typography align="center" variant="h5" style={{color: darkBlue, paddingTop: "30px"}}>
								{this.state.errorMessage}
							</Typography>
						) : null
						}
						{this.state.forecast.length > 0 ?
							<Grid container direction="row" justify='center'>
								<Grid item >
									<Typography variant="h5" style={{ color: darkBlue, paddingTop: "16px" }}>
										{this.state.weatherData.title}
									</Typography>
									<Typography variant="body1">
										{this.state.weatherData.parent.title}
									</Typography>
								</Grid>
								{this.state.forecast.map(day => (
									<Grid align="center" key={day.applicable_date}>
										<WeatherCard
											weather_state_name={day.weather_state_name}
											weather_state_abbr={day.weather_state_abbr}
											applicable_date={day.applicable_date}
											the_temp={day.the_temp}
											min_temp={day.min_temp}
											max_temp={day.max_temp}
											wind_speed={day.wind_speed}
											humidity={day.humidity}
											visability={day.visability}
											predictability={day.predictability}
										/>
									</Grid>
								))}

							</Grid>

							: null
						}
					</Container>
				</Grid>

			</div >
		);
	};
};

export default (Dashboard);

