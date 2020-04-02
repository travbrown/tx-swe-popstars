import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import DifficultyPage from "./pages";
import StartPage from "./pages/start_game";
import CountdownPage from "./pages/countdown";
import GamePage from "./pages/gamePage";
import MultiplayerPage from "./pages/multiplayerPage";
import PlayerOnePage from "./pages/playerOne";
import PlayerOneGamePage from "./pages/playerOneGame";
import PlayerTwoPage from "./pages/playerTwo";
import PlayerTwoGamePage from "./pages/playerTwoGame";
import TimeUp1 from "./pages/timeUp1";
import TimeUp2 from "./pages/timeUp2";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component ={DifficultyPage} />
        <Route exact path="/start_game" component ={StartPage} />
        <Route exact path="/countdown" component ={CountdownPage} />
        <Route exact path="/gamePage" component ={GamePage} />
        <Route exact path="/multiplayerPage" component ={MultiplayerPage} />
        <Route exact path="/playerOne" component ={PlayerOnePage} />
        <Route exact path ="/playerOneGame" component = {PlayerOneGamePage} />
        <Route exact path="/playerTwo" component ={PlayerTwoPage} />
        <Route exact path ="/playerTwoGame" component = {PlayerTwoGamePage} />
        <Route exact path ="/timeUp1" component = {TimeUp1} />
        <Route exact path ="/timeUp2" component = {TimeUp2} />
      </Switch>
    </Router>
  );
}