import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import logo from "../popstarslogo.png"
import { colors } from "@material-ui/core";

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
    //if(localStorage.getItem('access_token') === null){
      let access_token = getAccessToken();
      localStorage.setItem('access_token', access_token);
    //}
  }
    
  function MultiPName(){
      const history = useHistory();

      const handleClick = () => {
        history.push("/multiplayerNames");
      };
      localStorage.setItem('multiplayer', handleClick);
      return (
        <button class= "active_button" onClick={handleClick} >
          Multi Player
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
            <Link to="/singleplayerName" class= "active_button"> Single Player</Link>
            <p></p>
            <MultiPName></MultiPName>    
            <p></p>
            <Link to="/createGame" class= "active_button"> Create Game</Link>  
        </div>
        </header>
      </div>
    );
  };
  export default GameMode; 