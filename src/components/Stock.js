import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
const darkBlue = lightBlue[900]

const stockKey = process.env.REACT_APP_STOCK_KEY;

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stock: '',
			stockData: {},
			searchStock: false,
			error: false,
			errorMessage: "Looks like the symbol you searched for does not exist. Please try again with a valid symbol.",
			searchSuccess: false,
			stockData: []
		};
	}

	handleInputChange = (event) => {
		// Updating State
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	searchStock() {
		let currentComponent = this;
		fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + this.state.stock+ "&interval=5min&apikey=" + stockKey)
			.then(res =>
				res.json()
			)
			.then(
				(result) => {
					console.log("This is the data", result)
					// console.log("This is the data at 0", result["Meta Data"]["2. Symbol"])
					// console.log("OPEN" ,result["Time Series (5min)"]["2020-04-03 16:00:00"]["1. open"])
					// console.log("HIGH", result["Time Series (5min)"]["2020-04-03 16:00:00"]["2. high"])
					// console.log("LOW", result["Time Series (5min)"]["2020-04-03 16:00:00"]["3. low"])
					// console.log("Close", result["Time Series (5min)"]["2020-04-03 16:00:00"]["4. close"])
					// console.log("Volume",result["Time Series (5min)"]["2020-04-03 16:00:00"]["5. volume"])
					if (result["Error Message"]) {
						currentComponent.setState({
							error: true,
							searchSuccess: false,
						});
						return;
					}
					else {
						currentComponent.setState({
							error: false,
							stockData: result,
							searchSuccess: true,
						});
					}
					
				}
				
			)
			
	}
	render() {
		return (
			<Container maxWidth={"md"}>
				<h2 align="center">Enter stock symbol.</h2>
				<form align="center" noValidate autoComplete="off">
					<TextField style={{ marginRight: "20px" }} id="standard-basic" label="Stock Symbol" name="stock" onChange={this.handleInputChange} />
					<Button style={{ backgroundColor: darkBlue, color: "white", marginTop: "10px" }} onClick={() => this.searchStock()} variant="contained">Search</Button>
					{this.state.searchSuccess ? (
						<div>
						<p>There is stuff here</p>
						<p>Symbol: </p>
						</div>
					) 
						: null
					}
					{this.state.error === true ? (
						<p>{this.state.errorMessage}</p>
					)
					: <p>No errors</p>
					}
				</form>
			</Container>
		);
	}
}


export default Form;


