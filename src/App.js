import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import GuestLoginPage from './GuestLogin';
import SpotifyLoginPage from './SpotifyLoginPage';
import SpotifyLogin from './SpotifyLogin';
import logo from './popstarslogo.png';

export default function App() {


  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <img src={logo} className="App-logo" alt="logo" />
                <SpotifyLoginPage />
              </Route>
              <Route path="/callback/">
                HELLO I WORK PROPERLY
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

