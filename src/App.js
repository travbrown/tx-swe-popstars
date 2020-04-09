import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import GuestLogin from './GuestLogin';
import SpotifyLoginPage from './SpotifyLoginPage';
import SpotifyLogin from './SpotifyLogin';
import logo from './popstarslogo.png';
import GuestLoginPage from './GuestLoginPage';
import nameInput from './nameInput'
import NameInput from './nameInput';
function AllLogins() {
  return(
    <div>
    <SpotifyLoginPage/>
    <GuestLogin/>
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
              </Switch>
          </Router>
          </div> 
      </body>
  </div>
        
     



  );
}

