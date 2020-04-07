import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Typography } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import SearchIcon from '@material-ui/icons/Search';
import red from '@material-ui/core/colors/red';
const darkRed = red[900]
const darkBlue = lightBlue[900]
const stockKey = process.env.REACT_APP_STOCK_KEY;

class Stock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stock: '',
			stockData: {},
			priceData: {},
			searchStock: false,
			error: false,
			errorMessage: "Looks like the symbol you searched for does not exist. Please try again with a valid symbol.",
			searchSuccess: false,
			stockData: []
		};
	}

	handleInputChange = (event) => {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
			error: false
		});
	}

	searchStock() {
		let currentComponent = this;
		fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + this.state.stock + "&interval=5min&apikey=" + stockKey)
			.then(res =>
				res.json()
			)
			.then(
				(result) => {
					console.log("This is the data", result)
					if (result["Error Message"]) {
						currentComponent.setState({
							error: true,
							searchSuccess: false,
						});
						return;
					}
					else {
					let price = result["Time Series (5min)"]
					let priceObj = price[Object.keys(price)[0]];
					this.setState({
						stockData: result,
						priceData: priceObj,
					}, () => {
						this.setState({
							searchSuccess: true,
							error: false
						})
					});
					}
				}
			)
	}
	render() {
		return (
			<Container maxWidth={"md"}>
				<Typography variant="h5" align="center" style={{ color: darkBlue }}>Enter stock symbol.</Typography>
				<form align="center" noValidate autoComplete="off">
					<TextField style={{ marginRight: "20px" }} id="standard-basic" label="Stock Symbol" name="stock" onChange={this.handleInputChange} />
					<Button style={{ backgroundColor: darkBlue, color: "white", marginTop: "10px" }} onClick={() => this.searchStock()} variant="contained"><SearchIcon />Search</Button>
					{this.state.searchSuccess ? (
						<div>
							<Typography variant="body1">Stock Symbol: {this.state.stockData["Meta Data"]["2. Symbol"]}</Typography>
							<Typography variant="body1">Open: ${Number(this.state.priceData["1. open"]).toFixed(2)}</Typography>
							<Typography variant="body1">High: ${Number(this.state.priceData["2. high"]).toFixed(2)}</Typography>
							<Typography variant="body1">Low: ${Number(this.state.priceData["3. low"]).toFixed(2)}</Typography>
							<Typography variant="body1">Close: ${Number(this.state.priceData["4. close"]).toFixed(2)}</Typography>
							<Typography variant="body1">Volume: {this.state.priceData["5. volume"]} shares</Typography>
						</div>
					)
						: null
					}
					{this.state.error === true ? (
						<Typography variant="subtitle1" style={{ color: darkRed, paddingTop: "30px" }}>
							{this.state.errorMessage}
						</Typography>
					)
						: null
					}
				</form>
			</Container>
		);
	}
}

export default Stock;


