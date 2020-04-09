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
		// scales: { 
		// 		yAxes: [{
		// 				ticks: {
		// 						fontColor: "white",
		// 						stepSize: 1,
		// 						beginAtZero: true
		// 				}
		// 		}]
		// }
}
};


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
			<div style={{ maxWidth: "700px" }}>
				<Bar data={this.state} />
			</div>
		);
	}
};



export default (Graph);

// export default React.createClass({
//   displayName: 'Crazy Random Graph',

//   render() {
//     return (
//       <div>
//         <h2>You can even make crazy graphs like this!</h2>
//  		<Graph />
//       </div>
//     );
//   }
// });