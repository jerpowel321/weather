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
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { withStyles } from "@material-ui/core/styles";
import Barchart from "../components/Barchart"
const darkBlue = lightBlue[900]
const darkRed = red[900]



const styles = theme => ({

});

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
	// componentDidMount() {
	// 	fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956")
	// 		.then(res =>
	// 			res.json()
	// 		).then(
	// 			(res) => {
	// 				this.setState({
	// 					weatherData: res,
	// 					forecast: res.consolidated_weather,
	// 					search: false
	// 				});
	// 			}
	// 		)
	// }

	render() {
		// const { classes } = this.props;
		return (
			<div id="dashboard" className="gradient whitebackground">
				<Appbar />
				{/* backgroundColor: "#f8fcfd" */}
				<Grid container justify='center' style={{ margin: "20px 0px", position: "fixed", top: "20px", zIndex: "5000" }}>
					<Grid item xs={12} sm={8} align="center" >
						<Typography align="center" variant="h5" style={{ color: '#f8fcfd', padding: "5px", zIndex: "5000", display: "inline-Block" }}><i className="fas fa-cloud" style={{fontSize: "85px", color: "#f8fcfd"}}></i><span style={{position: "relative", left: "-95px", top: "-7px", color: "#29B6F6",fontWeight: "bold" }}>Weather</span><span style={{position: "relative", left: "-75px", top: "-7px", color: "#f8fcfd"}}>Dashboard</span></Typography>
						{this.state.forecast.length > 0 ?
							<Grid container style={{ zIndex: "5000" }}>
								<Grid item style={{ padding: "5px" }}>
									<Typography id="cityName" variant="h5" style={{ color: "#29B6F6" }}>
										{this.state.weatherData.title}
									</Typography>
									<Typography variant="body1" style={{color: "#f8fcfd"}}>
										{this.state.weatherData.parent.title}
									</Typography>
								</Grid>
								{this.state.forecast.map(day => (
									<Grid item align="center" key={day.applicable_date} style={{ padding: "5px" }}>
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
					</Grid>

					<Grid item xs={12} sm={3}>
						<Form parentCallback={this.callbackFunction} />
						{this.state.error === true ? (
							<Typography variant="subtitle1" align="center" style={{ color: darkRed, paddingBottom: "20px" }}>
								{this.state.errorMessage}
							</Typography>
						) : <div style={{ paddingBottom: "20px" }}></div>
						}
					</Grid>

				</Grid>

				<div id="content" >
					<Grid container alignItems='stretch' >
						<Grid item xs={12} >
							<Grid container justify='center' >
								<Grid item xs={12} sm={8} style={{ borderColor: darkBlue, borderStyle: "solid", borderWidth: "medium", marginTop: "30px", paddingBottom: "30px" }}>
									<Typography align="center" variant="h5" style={{ color: "white", backgroundColor: darkBlue, padding: "5px" }}><LocalHospitalIcon style={{ marginRight: "5px" }} />Coronavirus updates</Typography>
									<Coronanews />
									<Barchart></Barchart>
								</Grid>
								<Grid item xs={12} sm={3} style={{ borderColor: darkBlue, borderStyle: "solid", borderWidth: "medium", margin: "20px 30px", backgroundColor: "white" }}>
							<Typography align="center" variant="h5" style={{ color: "white", backgroundColor: darkBlue, padding: "5px" }}> <TrendingUpIcon style={{ marginRight: "5px" }} />Stock Dashboard</Typography>
							<Stock />
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

export default withStyles(styles, { withTheme: true })(Dashboard);