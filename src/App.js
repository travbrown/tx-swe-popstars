//App.js contains routes and links for our page navigations
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import GameContextProvider from './gameContext';
import Leaderboard from "./pages/Leaderboard";
import SpotifyLoginPage from "./pages/SpotifyLoginPage";
import DifficultyPage from "./pages/difficultyPage";
import CountdownPage from "./pages/countdown";
import GamePage from "./pages/gamePage";
import MultiplayerPage from "./pages/multiplayerPage";
import PlayerOnePage from "./pages/playerOne";
import PlayerOneGame from "./pages/playerOneGame";
import PlayerTwoPage from "./pages/playerTwo";
import PlayerTwoGame from "./pages/playerTwoGame";
import TimeUp1 from "./pages/timeUp1";
import TimeUp2 from "./pages/timeUp2";
import GameMode from './pages/gameMode';
import NameOneInput from "./pages/multiplayerNames";
import GameOver from "./pages/gameOver";
import SinglePlayerInput from "./pages/singleplayerName"; 
import CreateGame from "./pages/createGame";
import CutOffMark from "./pages/cutOffMark";
import ChoosePlaylist from "./pages/choosePlaylist";
import ChallengeOver from "./pages/challengeOver";
import { GameContext } from "./gameContext";

export default function App() {
  return (
      <div className="App-login ">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Fredoka+One&family=Press+Start+2P&family=Russo+One&display=swap');
      </style>
        <Router>
          <Switch>
            <GameContextProvider>
            <Route exact path="/" component={SpotifyLoginPage} />
            <Route exact path="/gameMode" component ={GameMode} />
            <Route exact path="/createGame" component ={CreateGame} />
            <Route exact path="/cutOffMark" component={CutOffMark} />
            <Route exact path="/choosePlaylist" component={ChoosePlaylist} />
            <Route exact path="/challengeOver" component={ChallengeOver}/>
            <Route exact path="/difficultyPage" component={DifficultyPage} />
            <Route exact path="/countdown" component={CountdownPage} />
            <Route exact path="/gamePage" component={GamePage} />
            <Route exact path="/Leaderboard" component={Leaderboard} />
            <Route exact path="/multiplayerPage" component={MultiplayerPage} />
            <Route exact path="/playerOne" component={PlayerOnePage} />
            <Route exact path="/playerOneGame" component={PlayerOneGame} />
            <Route exact path="/playerTwo" component={PlayerTwoPage} />
            <Route exact path="/playerTwoGame" component={PlayerTwoGame} />
            <Route exact path="/timeUp1" component={TimeUp1} />
            <Route exact path="/timeUp2" component={TimeUp2} />
            <Route exact path="/multiplayerNames" component={NameOneInput} />
            <Route exact path="/gameOver" component ={GameOver} />
            <Route exact path="/singleplayerName" component={SinglePlayerInput} />
            </GameContextProvider>
          </Switch>
        </Router>
      </div>
  );
}
