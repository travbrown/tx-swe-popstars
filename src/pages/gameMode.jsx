import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {GameContext} from './../gameContext';
import logo from "../popstarslogo.png";

const GameMode = () => {

  const {setAccessToken} = useContext(GameContext);
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
    
  function MultiPName(){//Made a component for the button that goes to the name input of a multiplayer game 
      const history = useHistory();

      const handleClick = () => {
        _setAccessToken();
        history.push("/multiplayerNames"); //on click, this button navigates to the name input page 
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

            <Link to="/singleplayerName" onClick={_setAccessToken} class= "active_button"> Single Player</Link>
            <p></p>
            <MultiPName/>  
            <p></p>
            <Link to="/createGame" onClick={_setAccessToken} class= "active_button">Create A Game</Link>    
          </div>
        </header>
      </div>
    );
  };
  export default GameMode; 