import React from 'react';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';
import lightBlue from '@material-ui/core/colors/lightBlue';
import moment from 'moment';

const darkBlue = lightBlue[900]


function Checkday({value}){
	// const { classes } = this.props;
	let weekDayName = moment(value).format('dddd');
	return (
		<Typography className="weekday" align="center" variant="h6" style={{color: darkBlue,	padding: "2px" }}>
			{weekDayName}
		</Typography>
	)
}

const Cards = (props) => {
	// const { classes } = this.props;
	let website = "https://www.metaweather.com/static/img/weather/png/64/" + props.weather_state_abbr + ".png";
	return (
		<Card 
		className="weatherC"
		style={{ width: "130px", 
		 		borderStyle: "none", 
		 		boxShadow: "none", 
		 		padding: "none", 
		 		paddingTop: "0px", 
		 		paddingBottom: "0px", 
		 		margin:"0px 5px"}}>
			<CardContent style={{	padding: "10px"}} >
				<Checkday value={props.applicable_date}></Checkday>
				<div align="center">
					<img className="weatherI" width="40px" src={website} alt={props.weather_state_abbr} />
				</div>
				<Typography align="center" variant="body2">
					{props.weather_state_name}
				</Typography>
				<Typography align="left" variant="body2">
					Current: {(props.the_temp * 9 / 5 + 32).toFixed(0)}°F
                </Typography>
				<Typography align="left" variant="body2">
					Min: {(props.min_temp * 9 / 5 + 32).toFixed(0)}°F
                </Typography>
				<Typography align="left" variant="body2">
					Max: {(props.max_temp * 9 / 5 + 32).toFixed(0)}°F
                </Typography>
				<Typography className="weatherp" align="left" variant="body2">
					Wind: {props.wind_speed.toFixed(0)} mph
                </Typography>
				<Typography className="weatherp" align="left" variant="body2">
					Humidity: {props.humidity}%
                </Typography>
			</CardContent>
		</Card>
	)
}

// export default withStyles(styles, { withTheme: true })(Cards);
export default (Cards);