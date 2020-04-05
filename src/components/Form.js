import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			state: '',
			zip: 94107,
			search: false,
		};
	}

	loadData = async (name, target) => {
		console.log("Current Update:", name, target);
	}

	handleInputChange = (event) => {
		// Updating State
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
		this.loadData(event.target.name, event.target.value);
	}

	searchClick = () => {
		console.log("Clicked the button")
      this.setState({
        search: true
			})
			this.props.parentCallback({
				city: this.state.city,
				state: this.state.state,
				zip: this.state.zip,
				search: true,
			});
  }
	render() {
		return (
			<Container maxWidth={"md"}>
				<h2 align="center">Please provide the city state/country or postal code.</h2>
				<form align="center" noValidate autoComplete="off">
					<TextField style={{marginRight: "20px"}} id="standard-basic" label="City" name="city" onChange={this.handleInputChange} />
					<TextField style={{marginRight: "20px"}} id="standard-basic" label="State or Country" name="state" onChange={this.handleInputChange} />
					<TextField style={{marginRight: "20px"}} id="standard-basic" label="Zip Code" name="zip" onChange={this.handleInputChange} />
					<Button onClick={this.searchClick} variant="contained">Search</Button>
				</form>
			</Container>
		);
	}
}


export default Form;
