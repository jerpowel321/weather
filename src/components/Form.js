import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lightBlue from '@material-ui/core/colors/lightBlue';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from "@material-ui/core/styles";
const darkBlue = lightBlue[900]

const styles = theme => ({
	root:{
		paddingTop: "35px", 
		margin: "15px"
	},
	h5: {
		color: 'white',
		paddingTop: "10px",
		position: "fixed",
	},
	form: {
		padding: "30px",
	},
	textfield: {
		marginRight: "20px",
		color: "white",
	},
	button: {
		backgroundColor: darkBlue,
		color: "white",
		marginTop: "10px"
	},
// 	input: {
// 	},
// 	multilineColor:{
// 		color:'white',
// 		floatingLabelFocusStyle: {
// 			color: "white"
// 		},
// 		MuiInputLabelRoot: {
// 			color: "white"
// 		}
// },
cssLabel: {
	color : 'white',
	borderColor: "white"
},
cssFocused: {
	color: 'white',
	borderColor: "white"
},

});


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			search: false,
		};
	}

	handleInputChange = (event) => {
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
		const { classes } = this.props;
		return (
			<div className={classes.root} >
				<i display="inline" style={{fontSize:"30px", paddingRight: "10px", color: "#29B6F6"}} className="fas fa-city"></i>
				<Typography display="inline" variant="h5" align="center" className={classes.h5}>
					Provide the city you would like to search.
					</Typography>
				<form align="center" noValidate autoComplete="off" className={classes.form}>
					<TextField className={classes.textfield}
					          InputLabelProps={{
											classes: {
												root: classes.cssLabel,
												focused: classes.cssFocused,
											},
										}}
										InputProps={{
											classes: {
												root: classes.cssLabel,
												focused: classes.cssFocused,
											},
										}}
						InputProps={{className: classes.multilineColor}}
						label="City" name="city" onChange={this.handleInputChange} 
						/>
					<Button className={classes.button} onClick={this.searchClick} variant="contained"><SearchIcon />Search</Button>
				</form>
			</div>
		);
	}
}


export default withStyles(styles, { withTheme: true })(Form);
