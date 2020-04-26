import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {GameContext} from './../gameContext';
import logo from "../popstarslogo.png";

const GameMode = () => {

    function getParameterByName(name) {
        var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
      
    function getAccessToken() {
        return getParameterByName('access_token');
    }

    
    useEffect(() => {
      setAccessToken();
  }, []);

  function setAccessToken(){
      let accessToken = getAccessToken();
      // const {access_token, setAccessToken} = useContext(GameContext);
      // setAccessToken(accessToken);
      localStorage.setItem('access_token', accessToken);
  }
    
  function MultiPName(){
      const history = useHistory();

      const handleClick = () => {
        history.push("/multiplayerNames");
      };
      
      localStorage.setItem('multiplayer', handleClick);
      
      return (
        <button class= "active_button" onClick={handleClick}>
          MultiPlayer
        </button>
      );
    }
    
    return (      
      <div className="App">
          <nav class="item">
            <h2 id="subject-no-user">Game Mode</h2>
          </nav>
        <header>
        <div className="centerItems">
        {/* <img src={logo} className="App-logo" alt="logo" height = "300px" /> */}
            <Link to="/singleplayerName" class= "active_button"> Single Player</Link>
            <p></p>
            <MultiPName></MultiPName>  
            <p></p>
            <Link to="/createGame" class= "active_button">Create A Game</Link>    
        </div>
        </header>
      </div>
    );
  };
  export default GameMode; 