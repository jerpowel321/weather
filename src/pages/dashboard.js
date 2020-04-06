import React, { Component } from "react";
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Form from '../components/Form';
import Appbar from '../components/Appbar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherCard from '../components/Card';

const black = grey[900];
const white = grey[50];


class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			state: '',
			zip: 94107,
			woeid: 1000000,
			latt_long: "",
			error: false,
			isLoaded: false,
			weatherData: {},
			forecast: [],
			search: false
		};
	}
	callbackFunction = (childData) => {
		console.log("This is the childData", childData)
		this.setState({
			city: childData.city,
			state: childData.state,
			zip: childData.zip,
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
										search: false
									});
								}
							)
					},
					(error) => {
						this.setState({
							isLoaded: true,
							error
						});
					}
				)
		}
	}
	componentDidMount() {
		console.log("YOOO")

	}

	searchWeather() {

	}

	render() {
		return (
			<div id="dashboard">
				<Appbar></Appbar>
				<Grid>
					<Form parentCallback={this.callbackFunction} />
				</Grid>
				<Grid>

					{this.state.forecast.length > 0 ?
						<Container>
							<Grid container >
								{this.state.forecast.map(day => (
									<Grid item xs={12} md ={2} key={day.applicable_date}>
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
						</Container>
						: null
					}
				</Grid>

			</div >
		);
	};
};

export default (Dashboard);

