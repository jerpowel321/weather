import React, { Component } from "react";
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Form from '../components/Form';
import Appbar from '../components/Appbar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const black = grey[900];
const white = grey[50];


class Dashboard extends Component {
	constructor(props) {
    super(props);
    this.state = {
      city: 'San Francisco',
    	state: 'California',
			zip: 94107,
			error: false,
			isLoaded: false,
			response: {},
			search: false,
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
		this.searchWeather()
	}
	// componentDidMount() {
  //   fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "," + this.state.state + "&appid=92750ddfff262460b9f34b94f78ca42b")
	// 		.then(res => 
	// 			res.json()
	// 		)
  //     .then(
  //       (result) => {
	// 				console.log(result)
  //         this.setState({
  //           isLoaded: true,
	// 					response: result
	// 				});
	// 				console.log(this.state.response)
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

	searchWeather(){
		fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "," + this.state.state + "&appid=92750ddfff262460b9f34b94f78ca42b")
			.then(res => 
				res.json()
			)
      .then(
        (result) => {
					console.log(result)
          this.setState({
            isLoaded: true,
						response: result
					});
					console.log(this.state.response)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
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
					<p>{this.state.response.name}</p>
					{/* <p>{this.state.response.weather}</p> */}

					{/* <p>{this.state.response.main.temp}</p> */}
					{/* <p>{this.state.response.main.temp}</p> */}
					{/* <p>{this.state.response.wind.speed}</p> */}

					<p>{this.state.response.cod}</p>


				<h6>This is the updated City</h6>
					{this.state.search === true ? (
						<p>{this.state.response.name}</p>
					) : null
					}

					</Grid>

			</div >
		);
	}

};

export default (Dashboard);
