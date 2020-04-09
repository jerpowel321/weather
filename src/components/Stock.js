import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Typography } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import SearchIcon from '@material-ui/icons/Search';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid'
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
			errorMessage: "Please try again with a valid stock symbol.",
			searchSuccess: false,
			nflx: {},
			fb: {},
			tsla: {},
			msft: {},
			initialLoaded: false
		};
	}

	handleInputChange = (event) => {
		let { name, value } = event.target;
		this.setState({
			[name]: value,
			error: false
		});
	}


	componentDidMount() {
		let stocks = [ "NFLX", "FB", "TSLA", "MSFT"];
		for (let i = 0; i < 4; i++) {
			let stock = stocks[i]
			fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + stock + "&interval=5min&apikey=" + stockKey)
				.then(res =>
					res.json()
				)
				.then(
					(result) => {
						let price = result["Time Series (5min)"]
						let priceObj = price[Object.keys(price)[0]];
						if (stock === "NFLX") {
							this.setState({
								nflx: priceObj,
							})
						}
						else if (stock === "FB") {
							this.setState({
								fb: priceObj,
							})
						}
						else if (stock === "TSLA") {
							this.setState({
								tsla: priceObj,
							})
						}
						else {
							this.setState({
								msft: priceObj,
								initialLoaded: true
							})
						}
					}
			)
	}
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
		<Container>
			<div>
				<Typography variant="h5" align="center" style={{ color: darkBlue, paddingTop: "10px" }}>Enter stock symbol.</Typography>
				<form align="center" noValidate autoComplete="off" >
					<div style={{ padding: "10px" }}>
						<TextField style={{ marginRight: "20px" }} id="standard-basic" label="Stock Symbol" name="stock" onChange={this.handleInputChange} />
						<Button style={{ backgroundColor: darkBlue, color: "white", marginTop: "10px" }} onClick={() => this.searchStock()} variant="contained"><SearchIcon />Search</Button>
					</div>
					{this.state.searchSuccess ? (
						<div align="center" style={{ paddingTop: "10px", color: "#152238", fontWeight: "bold", width: "60%", margin: "auto"}}>
							<Typography variant="h5" fontWeight="fontWeightBold" align="left" >{this.state.stockData["Meta Data"]["2. Symbol"]}</Typography>
							<Typography variant="h6" fontWeight="fontWeightBold"  align="left" >Open: ${Number(this.state.priceData["1. open"]).toFixed(2)}</Typography>
							<Typography variant="h6" fontWeight="fontWeightBold"  align="left" >High: ${Number(this.state.priceData["2. high"]).toFixed(2)}</Typography>
							<Typography variant="h6" fontWeight="fontWeightBold"  align="left" >Low: ${Number(this.state.priceData["3. low"]).toFixed(2)}</Typography>
							<Typography variant="h6" fontWeight="fontWeightBold"  align="left" >Close: ${Number(this.state.priceData["4. close"]).toFixed(2)}</Typography>
							<Typography variant="h6" fontWeight="fontWeightBold"  align="left" >Volume: {this.state.priceData["5. volume"]} shares</Typography>
						</div>
					)
						: null
					}
					{this.state.error === true ? (
						<Typography variant="subtitle1" style={{ color: darkRed, paddingBottom: "20px" }}>
							{this.state.errorMessage}
						</Typography>
					)
						: <div style={{ paddingBottom: "20px" }}></div>
					}
				</form>
			</div>

			{this.state.initialLoaded ? (
				<Grid container align="center">
					<Grid item xs={3}>
						<img height="50px" src="/netflix.png" alt="Netflix Logo" />
						<Typography align="center" variant="body1"> ${Number(this.state.nflx["4. close"]).toFixed(2)}</Typography>
					</Grid>
					<Grid item xs={3}>
						<img height="50px" src="/facebook.png" alt="Facebook Logo" />
						<Typography align="center" variant="body1"> ${Number(this.state.fb["4. close"]).toFixed(2)}</Typography>
					</Grid>
					<Grid item xs={3}>
						<img height="50px" src="/microsoft.png" alt="Microsoft Logo" />
						<Typography align="center" variant="body1"> ${Number(this.state.msft["4. close"]).toFixed(2)}</Typography>
					</Grid>
					<Grid item xs={3}>
						<img height="50px" src="/tesla.png" alt="Tesla Logo" />
						<Typography align="center" variant="body1"> ${Number(this.state.tsla["4. close"]).toFixed(2)}</Typography>
					</Grid>
				</Grid>
			)
				: null
			}

		</Container>
	);
}
}

export default Stock;


