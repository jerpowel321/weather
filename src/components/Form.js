import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lightBlue from '@material-ui/core/colors/lightBlue';
import SearchIcon from '@material-ui/icons/Search';
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
			<div >
				<Typography variant="h5" align="center" style={{color: darkBlue, paddingTop: "10px"}}>Please provide the city you would like to search.</Typography>
				<form align="center" noValidate autoComplete="off" style={{padding: "10px"}}>
				<TextField style={{marginRight: "20px"}} id="standard-basic" label="City" name="city" onChange={this.handleInputChange} />
					<Button style={{backgroundColor: darkBlue, color: "white", marginTop: "10px"}} onClick={this.searchClick} variant="contained"><SearchIcon/>Search</Button>
				</form>
			</div>
		);
	}
}


export default Form;
