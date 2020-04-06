import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
const darkBlue = lightBlue[900]


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			search: false,
		};
	}

	handleInputChange = (event) => {
		// Updating State
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	searchClick = () => {
		console.log("Clicked the button")
      this.setState({
        search: true
			})
			this.props.parentCallback({
				city: this.state.city,
				search: true,
			});
  }
	render() {
		return (
			<Container maxWidth={"md"}>
				<h2 align="center">Please provide the city you would like to search.</h2>
				<form align="center" noValidate autoComplete="off">
					<TextField style={{marginRight: "20px"}} id="standard-basic" label="City" name="city" onChange={this.handleInputChange} />
					<Button style={{backgroundColor: darkBlue, color: "white", marginTop: "10px"}} onClick={this.searchClick} variant="contained">Search</Button>
				</form>
			</Container>
		);
	}
}


export default Form;
