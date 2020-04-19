import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import logo from "../popstarslogo.png"

const GameMode = () => {

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
    function MultiPName(){
      const history = useHistory();

      const handleClick = () => {
          history.push("/multiplayerNames");
      }
      return (
        <button class= "active_button" onClick={handleClick}>
          MultiPlayer
        </button>
      );
    }
    
    return (      
      <div className="App">
        <div class ="item">
          <li id="username">Username</li>
          <li id="subject"><center>Game Mode</center></li>
      </div>
        <header>
        <div className="centerItems">
        <img src={logo} className="App-logo" alt="logo" height = "300px" />
            <Link to="/difficultyPage" class= "active_button"> Single Player</Link>
            <p></p>
            
            <MultiPName></MultiPName>      
            </div>
        </header>
      </div>
    );
  };
  export default GameMode; 