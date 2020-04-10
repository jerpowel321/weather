import React from 'react';
import { Bar } from 'react-chartjs-2';
import color from 'rcolor';
import Grid from '@material-ui/core/Grid'

const initialState = {

	labels: ['🌐Worldwide', '🇺🇸United States', '🇪🇸Spain', '🇮🇹Italy', '🇩🇪Germany','🇨🇳China'],
	datasets: [
		{
			label: 'Total Cases',
			backgroundColor: "#29B6F6",
			borderColor: "#152238",
			borderWidth: 1,
			hoverBackgroundColor: color(),
			hoverBorderColor: color(),
			data: [65, 59, 80, 81, 56, 55]
		}
	],
	options: {
		legend: {
				fontColor: "white"
		},
}
};

// const data = [
// 	['🌐Worldwide', props.wwncases, props.wwcases, props.wwndeaths, props.wwdeaths, props.wwnrecovered, props.wwrecovered],
// 	['🇺🇸United States', data[0]["NewConfirmed"], data[0]["TotalConfirmed"], data[0]["NewDeaths"],data[0]["TotalDeaths"], data[0]["NewRecovered"], data[0]["TotalRecovered"]],
// 	['🇪🇸Spain', data[1]["NewConfirmed"], data[1]["TotalConfirmed"], data[1]["NewDeaths"],data[1]["TotalDeaths"], data[1]["NewRecovered"], data[1]["TotalRecovered"]],
// 	['🇮🇹Italy', data[2]["NewConfirmed"], data[2]["TotalConfirmed"], data[2]["NewDeaths"],data[2]["TotalDeaths"], data[2]["NewRecovered"], data[2]["TotalRecovered"]],
// 	['🇩🇪Germany', data[3]["NewConfirmed"], data[3]["TotalConfirmed"], data[3]["NewDeaths"],data[3]["TotalDeaths"], data[3]["NewRecovered"], data[3]["TotalRecovered"]],
// 	['🇨🇳China', data[4]["NewConfirmed"], data[4]["TotalConfirmed"], data[4]["NewDeaths"],data[4]["TotalDeaths"], data[4]["NewRecovered"], data[4]["TotalRecovered"]]
// ];

class Graph extends React.Component {

	componentWillMount() {
		this.setState(initialState);
	}

	componentDidMount() {

		var _this = this;

		setInterval(function () {
			var oldDataSet = _this.state.datasets[0];
			var newData = [

			];

			for (var x = 0; x < _this.state.labels.length; x++) {
				newData.push(Math.floor(Math.random() * 100));
			}

			var newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;
			newDataSet.backgroundColor = "#29B6F6";
			newDataSet.borderColor = "#152238";
			newDataSet.hoverBackgroundColor = color();
			newDataSet.hoverBorderColor = color();

			var newState = {
				...initialState,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 7000);
	}
	render() {
		return (
			<div style={{ maxWidth: "700px", padding: "30px" }}>
				<Bar data={this.state} />
			</div>
		);
	}
};



export default (Graph);
