import React from "react";
import {logo} from "./popstarslogo.png"; 
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import SpotifyLoginPage from "./pages/SpotifyLoginPage";
import DifficultyPage from "./pages/difficultyPage";
import CountdownPage from "./pages/countdown";
import GamePage from "./pages/gamePage";
import CountdownPageMedium from "./pages/countdownMedium";
import GamePageMedium from "./pages/gamePageMedium";
import CountdownPageHard from "./pages/countdownHard";
import GamePageHard from "./pages/gamePageHard";
import MultiplayerPage from "./pages/multiplayerPage";
import PlayerOnePage from "./pages/playerOne";
import PlayerOneGamePage from "./pages/playerOneGame";
import PlayerTwoPage from "./pages/playerTwo";
import PlayerTwoGamePage from "./pages/playerTwoGame";
import TimeUp1 from "./pages/timeUp1";
import TimeUp2 from "./pages/timeUp2";
import PlayerOnePageMedium from "./pages/playerOneMedium";
import PlayerOneGamePageMedium from "./pages/playerOneGameMedium";
import PlayerTwoPageMedium from "./pages/playerTwoMedium";
import PlayerTwoGamePageMedium from "./pages/playerTwoGameMedium";
import TimeUp1Medium from "./pages/timeUp1Medium";
import PlayerOnePageHard from "./pages/playerOneHard";
import PlayerOneGamePageHard from "./pages/playerOneGameHard";
import PlayerTwoPageHard from "./pages/playerTwoHard";
import PlayerTwoGamePageHard from "./pages/playerTwoGameHard";
import TimeUp1Hard from "./pages/timeUp1Hard";
import GameMode from './pages/gameMode';
import NameOneInput from "./pages/multiplayerNames";
import GameOver from "./pages/gameOver";
import SinglePlayerInput from "./pages/singleplayerName"; 
import CreateGame from "./pages/createGame";
import CutOffMarkEasy from "./pages/cutOffMarkEasy";
import ChoosePlaylist from "./pages/choosePlaylist";
import PlaylistOnePage from "./pages/playlistOne";
import PlaylistOneGame from "./pages/playlistOneGame";
import EasyGameOver from "./pages/easyGameOver";

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
          <Route exact path="/countdown" component={CountdownPage} />
          <Route exact path="/gamePage" component={GamePage} />
          <Route exact path="/countdownMedium" component={CountdownPageMedium} />
          <Route exact path="/gamePageMedium" component={GamePageMedium} />
          <Route exact path="/countdownHard" component={CountdownPageHard} />
          <Route exact path="/gamePageHard" component={GamePageHard} />
          <Route exact path="/Leaderboard" component={LeaderboardInfo} />
          <Route exact path="/multiplayerPage" component={MultiplayerPage} />
          <Route exact path="/playerOne" component={PlayerOnePage} />
          <Route exact path="/playerOneGame" component={PlayerOneGamePage} />
          <Route exact path="/playerTwo" component={PlayerTwoPage} />
          <Route exact path="/playerTwoGame" component={PlayerTwoGamePage} />
          <Route exact path="/timeUp1" component={TimeUp1} />
          <Route exact path="/timeUp2" component={TimeUp2} />
          <Route exact path="/playerOneMedium" component={PlayerOnePageMedium} />
          <Route exact path="/playerOneGameMedium" component={PlayerOneGamePageMedium} />
          <Route exact path="/playerTwoMedium" component={PlayerTwoPageMedium} />
          <Route exact path="/playerTwoGameMedium" component={PlayerTwoGamePageMedium} />
          <Route exact path="/timeUp1Medium" component={TimeUp1Medium} />
          <Route exact path="/playerOneHard" component={PlayerOnePageHard} />
          <Route exact path="/playerOneGameHard" component={PlayerOneGamePageHard} />
          <Route exact path="/playerTwoHard" component={PlayerTwoPageHard} />
          <Route exact path="/playerTwoGameHard" component={PlayerTwoGamePageHard} />
          <Route exact path="/timeUp1Hard" component={TimeUp1Hard} />
          <Route exact path="/multiplayerNames" component={NameOneInput} />
          <Route exact path="/gameOver" component ={GameOver} />
          <Route exact path="/singleplayerName" component={SinglePlayerInput} />
          <Route exact path="/createGame" component ={CreateGame} />
          <Route exact path="/CutOffMarkEasy" component={CutOffMarkEasy} />
          <Route exact path="/choosePlaylist" component={ChoosePlaylist} />
          <Route exact path="/playlistOne" component={PlaylistOnePage} />
          <Route exact path="/playlistOneGame" component={PlaylistOneGame}/>
          <Route exact path="/easyGameOver" component={EasyGameOver}/>
        </Switch>
      </Router>
    </div>
  );
}
