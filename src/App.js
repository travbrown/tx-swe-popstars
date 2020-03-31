import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import DifficultyPage from "./pages";
import StartPage from "./pages/start_game";
import CountdownPage from "./pages/countdown";
import GamePage from "./pages/gamePage";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component ={DifficultyPage} />
        <Route exact path="/start_game" component ={StartPage} />
        <Route exact path="/countdown" component ={CountdownPage} />
        <Route exact path="/gamePage" component ={GamePage} />
      </Switch>
    </Router>
  );
}