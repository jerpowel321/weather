import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard"

function App() {
  return (
    <Router>
    <Route exact path="/" component={Dashboard} />
    {/* <Route exact path="/about" component={About} /> */}
  </Router>
  );
}

export default App;
