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
  // table: {
  //   maxWidth: "400px",
  // },
});

function createData(location, totalCases, totalDeaths, totalRecovered) {
  return { location, totalCases, totalDeaths, totalRecovered };
}

export default function DenseTable(props) {
  const data = [props.usa, props.spain, props.italy, props.germany, props.china ]
  const classes = useStyles();
  const rows = [
    createData('🌐Worldwide', props.wwcases, props.wwdeaths, props.wwnrecovered, props.wwrecovered),
    createData('🇺🇸United States', data[0]["TotalConfirmed"], data[0]["TotalDeaths"], data[0]["TotalRecovered"]),
    createData('🇪🇸Spain', data[1]["TotalConfirmed"], data[1]["TotalDeaths"], data[1]["TotalRecovered"]),
    createData('🇮🇹Italy', data[2]["TotalConfirmed"], data[2]["TotalDeaths"], data[2]["TotalRecovered"]),
    createData('🇩🇪Germany', data[3]["TotalConfirmed"], data[3]["TotalDeaths"], data[3]["TotalRecovered"]),
    createData('🇨🇳China', data[4]["TotalConfirmed"], data[4]["TotalDeaths"], data[4]["TotalRecovered"])
  ];
  return (
    <TableContainer  component={Paper}>
      <Table  size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align="right">Cases</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.location}>
              <TableCell component="th" scope="row">
                {row.location}
              </TableCell>
              <TableCell align="right">{row.totalCases}</TableCell>
              <TableCell align="right">{row.totalDeaths}</TableCell>
              <TableCell align="right">{row.totalRecovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}