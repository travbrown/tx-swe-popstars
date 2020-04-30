//this page allows you to choose a game mode
//users can choose either singleplayer, multiplayer, or create a challenge

import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {GameContext} from './../gameContext';

const GameMode = () => {

  const {setAccessToken,setMode} = useContext(GameContext);
    function getParameterByName(name) {
      var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
      
    function getAccessToken() {
      return getParameterByName('access_token');
    }


  function _setAccessToken(){
    let accessToken = getAccessToken();
    if(accessToken !== null){
      setAccessToken(accessToken);
    }
  }
  const handleClick = (mode) => {
    _setAccessToken();
    localStorage.setItem('multiplayer', handleClick);
    setMode(mode);
  };
    
    return (      
      <div className="App">
        <nav class="item">
          <h2 id="subject-no-user">Game Mode</h2>
        </nav>
        <header>
        <div className="centerItems">
            <Link to="/singleplayerName" onClick={()=>handleClick('single-player')} class= "active_button"> Single Player</Link>
            <p></p> 
            <Link to="/multiplayerNames" onClick={()=>handleClick('multiplayer')} class="active_button">MultiPlayer</Link>
            <p></p>
            <Link to="/createGame" onClick={()=>handleClick('create-game')} class= "active_button">Create A Game</Link>    
          </div>
        </header>
      </div>
    );
  };
  export default GameMode; 