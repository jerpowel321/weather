import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Form from '../components/Form';
import Appbar from '../components/Appbar'
import WeatherCard from '../components/Card';
import Typography from '@material-ui/core/Typography';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Stock from '../components/Stock';
import Coronanews from '../components/Coronanews';
import Footer from '../components/Footer';
import red from '@material-ui/core/colors/red';
import CloudIcon from '@material-ui/icons/Cloud';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
const darkBlue = lightBlue[900]
const darkRed = red[900]


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
			today: ''
		};
	}
	callbackFunction = (childData) => {
		console.log("This is the childData", childData)
		this.setState({
			city: childData.city,
			search: childData.search,
			error: false
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
				<div id="content">
					<Grid container alignItems='stretch'>
						<Grid item item xs={12} sm={8} style={{ borderColor: darkBlue, borderStyle: "solid", borderWidth: "medium", margin: "20px 0px" }}>
							<Typography align="center" variant="h5" style={{ color: "white", backgroundColor: darkBlue, padding: "5px" }}><CloudIcon /> Weather Dashboard</Typography>
							{this.state.forecast.length > 0 ?
								<Grid container direction="row" >
									<Grid item style={{ padding: "10px" }}>
										<Typography id="cityName" variant="h5" style={{ color: darkBlue }}>
											{this.state.weatherData.title}
										</Typography>
										<Typography variant="body1">
											{this.state.weatherData.parent.title}
										</Typography>
									</Grid>
									{this.state.forecast.map(day => (
										<Grid item align="center" key={day.applicable_date} style={{ paddingTop: "10px" }}>
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
							<Grid container>
								<Grid item xs={12} sm={12}>
									<Form parentCallback={this.callbackFunction} />
									{this.state.error === true ? (
										<Typography variant="subtitle1" align="center" style={{ color: darkRed, paddingBottom: "20px" }}>
											{this.state.errorMessage}
										</Typography>
									) : <div style={{ paddingBottom: "20px" }}></div>
									}
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={3} style={{ borderColor: darkBlue, borderStyle: "solid", borderWidth: "medium", margin: "20px 30px" }}>
							<Typography align="center" variant="h5" style={{ color: "white", backgroundColor: darkBlue, padding: "5px" }}> <TrendingUpIcon style={{ marginRight: "5px" }} />Stock Dashboard</Typography>
							<Stock />
						</Grid>
						<Grid item xs={12} >
							<Grid container justify='center'>
								<Grid item xs={12} sm={9} style={{ borderColor: darkBlue, borderStyle: "solid", borderWidth: "medium", marginTop: "30px", paddingBottom: "30px" }}>
									<Typography align="center" variant="h5" style={{ color: "white", backgroundColor: darkBlue, padding: "5px" }}><LocalHospitalIcon style={{ marginRight: "5px"}} />Coronavirus updates</Typography>
									<Coronanews />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
				<Footer></Footer>

			</div >
		);
	};
};

export default (Dashboard);

