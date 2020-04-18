import React from "react";
import {logo} from "./popstarslogo.png"; 
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Leaderboard from "./Leaderboard";
import SpotifyLoginPage from "./pages/SpotifyLoginPage";
import DifficultyPage from "./pages/difficultyPage";
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
import GameMode from './pages/gameMode';
import NameOneInput from "./pages/multiplayerNames";


function AllLogins() {
  return (
    <div>
      <SpotifyLoginPage />
    </div>
  );
}

function LeaderboardInfo()
{
  return (
    <div>
      <Leaderboard />
    </div>
  )
}

export default function App() {
  return (
    <div className="App-login ">
    <style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Fredoka+One&family=Press+Start+2P&family=Russo+One&display=swap');
</style>
      <Router>
        <Switch>
          <Route exact path="/" component={AllLogins} />
          <Route exact path="/gameMode" component ={GameMode} />
          <Route exact path="/difficultyPage" component={DifficultyPage} />
          <Route exact path="/start_game" component={StartPage} />
          <Route exact path="/countdown" component={CountdownPage} />
          <Route exact path="/gamePage" component={GamePage} />
          <Route exact path="/" component={LeaderboardInfo} />
          <Route exact path="/multiplayerPage" component={MultiplayerPage} />
          <Route exact path="/playerOne" component={PlayerOnePage} />
          <Route exact path="/playerOneGame" component={PlayerOneGamePage} />
          <Route exact path="/playerTwo" component={PlayerTwoPage} />
          <Route exact path="/playerTwoGame" component={PlayerTwoGamePage} />
          <Route exact path="/timeUp1" component={TimeUp1} />
          <Route exact path="/timeUp2" component={TimeUp2} />
          <Route exact path="/multiplayerNames" component={NameOneInput} />
        </Switch>
      </Router>
    </div>
  );
}
