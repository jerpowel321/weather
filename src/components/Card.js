import React from 'react';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';
import lightBlue from '@material-ui/core/colors/lightBlue';

let blue = lightBlue[900]

const Cards = (props) => {
    let website = "https://www.metaweather.com/static/img/weather/png/64/" + props.weather_state_abbr + ".png";
    // let website = "    https://www.metaweather.com/static/img/weather/" + props.weather_state_abbr + ".svg";

    return (
        <Card style={{ width: "200px", borderStyle: "none"}}>
            <CardContent>
            <Typography align="center" variant="h6" style={{color: blue, padding: "2px"}}>
                    Date: {props.applicable_date}
                </Typography>
                <div align="center">
                <img width="40px" src={website} alt={props.weather_state_abbr} />
                </div>
                <Typography align="center" variant="subtitle2">
                   {props.weather_state_name}
                </Typography>
                <Typography variant="subtitle2">
                    Current: {props.the_temp.toFixed(2)}
                </Typography>
                <Typography variant="subtitle2">
                    Min: {props.min_temp.toFixed(2)}
                </Typography>
                <Typography variant="subtitle2">
                    Max: {props.max_temp.toFixed(2)}
                </Typography>
                <Typography variant="subtitle2">
                    Wind: {props.wind_speed.toFixed(2)}
                </Typography>
                <Typography variant="subtitle2">
                    Humidity: {props.humidity}
                </Typography>
                <Typography variant="subtitle2">
                    Predictability: {props.predictability}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Cards