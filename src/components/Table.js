import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: "700px",
  },
});

function createData(location, newCases, totalCases, newDeaths, totalDeaths, newRecovered, totalRecovered) {
  return { location, newCases, totalCases, newDeaths, totalDeaths, newRecovered, totalRecovered };
}

export default function DenseTable(props) {
  const data = [props.usa, props.spain, props.italy, props.germany, props.china ]
  const classes = useStyles();
  const rows = [
    createData('🌐Worldwide', props.wwncases, props.wwcases, props.wwndeaths, props.wwdeaths, props.wwnrecovered, props.wwrecovered),
    createData('🇺🇸United States', data[0]["NewConfirmed"], data[0]["TotalConfirmed"], data[0]["NewDeaths"],data[0]["TotalDeaths"], data[0]["NewRecovered"], data[0]["TotalRecovered"]),
    createData('🇪🇸Spain', data[1]["NewConfirmed"], data[1]["TotalConfirmed"], data[1]["NewDeaths"],data[1]["TotalDeaths"], data[1]["NewRecovered"], data[1]["TotalRecovered"]),
    createData('🇮🇹Italy', data[2]["NewConfirmed"], data[2]["TotalConfirmed"], data[2]["NewDeaths"],data[2]["TotalDeaths"], data[2]["NewRecovered"], data[2]["TotalRecovered"]),
    createData('🇩🇪Germany', data[3]["NewConfirmed"], data[3]["TotalConfirmed"], data[3]["NewDeaths"],data[3]["TotalDeaths"], data[3]["NewRecovered"], data[3]["TotalRecovered"]),
    createData('🇨🇳China', data[4]["NewConfirmed"], data[4]["TotalConfirmed"], data[4]["NewDeaths"],data[4]["TotalDeaths"], data[4]["NewRecovered"], data[4]["TotalRecovered"])
  ];
  return (
    <TableContainer style={{width: "700px"}}component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align="right">New</TableCell>
            <TableCell align="right">Cases</TableCell>
            <TableCell align="right">New</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">New</TableCell>
            <TableCell align="right">Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.location}>
              <TableCell component="th" scope="row">
                {row.location}
              </TableCell>
              <TableCell align="right">{row.newCases}</TableCell>
              <TableCell align="right">{row.totalCases}</TableCell>
              <TableCell align="right">{row.newDeaths}</TableCell>
              <TableCell align="right">{row.totalDeaths}</TableCell>
              <TableCell align="right">{row.newRecovered}</TableCell>
              <TableCell align="right">{row.totalRecovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}