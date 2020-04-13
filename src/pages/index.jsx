import React, {useEffect} from "react";
import './index.css';
import { Link } from "react-router-dom";

const DifficultyPage = () => {

  
  function getParameterByName(name) {
    var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  
  function getAccessToken() {
    return getParameterByName('access_token');
  }

  useEffect(() => {
    // Set token
    console.log("UseEffect activated");
    let access_token = getAccessToken();
    localStorage.setItem('access_token', access_token);
  }, []);


  return (
    <div className="App">
      <div class ="item">Username</div>
      <div class ="item">Difficulty</div> 

      <header className="App-header">
        <Link to="/start_game" class= "active_button"> Easy</Link>
        <p></p>
        <Link to="/start_game" class= "active_button"> Medium</Link>
        <p></p>
        <Link to="/start_game" class= "active_button"> Hard</Link>
        <p></p><p></p>
        <Link to="/" class= "default_button"> Back</Link> 
        <p></p>
        <Link to="/multiplayerPage">Multi-Player</Link>   
      </header>
    </div>
  );
};

export default DifficultyPage;