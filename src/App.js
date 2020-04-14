import React from "react";
import "./App.css";
import SpotifyLoginPage from "./SpotifyLoginPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import firebase from "./firebase"
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
import SinglePlayer from "./singlePlayer";
import MultiPlayer from "./multiPlayer"

function AllLogins() {
  return (
    <div>
      <SpotifyLoginPage />
    </div>
  );
}

function allModes(){
  return(
  <div>
    <SinglePlayer/>
    <MultiPlayer/>
  </div>
  )
}
export default function App() {
  return (
    <div className="App-login ">
      <Router>
        <Switch>
          <Route exact path="/" component={AllLogins} />
          <Route exact path="/difficultyPage" component={DifficultyPage} />
          <Route exact path="/start_game" component={StartPage} />
          <Route exact path="/countdown" component={CountdownPage} />
          <Route exact path="/gamePage" component={GamePage} />
          <Route exact path="/multiplayerPage" component={MultiplayerPage} />
          <Route exact path="/playerOne" component={PlayerOnePage} />
          <Route exact path="/playerOneGame" component={PlayerOneGamePage} />
          <Route exact path="/playerTwo" component={PlayerTwoPage} />
          <Route exact path="/playerTwoGame" component={PlayerTwoGamePage} />
          <Route exact path="/timeUp1" component={TimeUp1} />
          <Route exact path="/timeUp2" component={TimeUp2} />
          <Route exact path="/gameMode" component ={allModes} />
        </Switch>
      </Router>
    </div>
  );
}
