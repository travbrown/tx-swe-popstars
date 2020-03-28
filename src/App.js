import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import DifficultyPage from "./pages";
import startPage from "./pages/start_game";
import Button from '@material-ui/core/Button';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component ={DifficultyPage} />
        <Route exact path="/start_game" component ={startPage} />
      </Switch>
    </Router>
  );
}