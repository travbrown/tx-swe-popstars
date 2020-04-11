import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import GuestLogin from './GuestLogin';
import SpotifyLoginPage from './SpotifyLoginPage';
import logo from './popstarslogo.png';
import nameInput from './nameInput';
import SinglePlayer from './singlePlayer';
import MultiPlayer from './multiPlayer'; 
import GamePage from "./gamePage";
import MultiplayerPage from "./multiplayerPage";

function AllLogins() {
  return(
    <div>
    <SpotifyLoginPage/>
    <br></br>
    <GuestLogin/>
  </div>
    
  )
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
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    </header>
      <body>
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component ={AllLogins} /> 
                <Route exact path="/nameInput" component ={nameInput} />
                <Route exact path="/gameMode" component ={allModes} />
                <Route exact path="/gamePage" component ={GamePage} />
                <Route exact path="/multiplayerPage" component ={MultiplayerPage} />
              </Switch>
          </Router>
          </div> 
      </body>
  </div>
        
     



  );
}

