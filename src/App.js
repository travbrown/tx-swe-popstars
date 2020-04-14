import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import SpotifyLoginPage from "./SpotifyLoginPage";
import firebase from "firebase";
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

function AllLogins() {
  return (
    <div>
      <SpotifyLoginPage />
    </div>
  );
}

export default function App() {
  console.log("App!!!");
 
  /*
  firebase.firestore().collection("kristak").doc("testID").get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  */
   //Added a new collection, users
 firebase.firestore().collection("Users").doc("Tariq").set({
  Username : "Tariqqqq123",
  Score : 325
 })
 .then(function() {
  console.log("Document successfully written!");
 })
 .catch(function(error) {
  console.error("Error writing document: ", error);
 });
  
 //Leaderboard Code
 var leader = firebase.firestore().collection("Users");
 var query = leader.where("Score",">=", 325);
 query.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
 

  return (
    <div className="App-login ">
      <Router>
        <Switch>
          <Route exact path="/" component={AllLogins} />
          <Route exact path="/gameMode" component ={GameMode} />
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
        </Switch>
      </Router>
    </div>
  );
}
