import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme();
theme.typography.h6 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};

theme.typography.h5 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
};


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Route exact path="/" component={Dashboard} />
  </Router>
  </ThemeProvider>

  );
}

export default App;
