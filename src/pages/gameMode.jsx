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

    function MultiPName(){//Made a component for the button that goes to the name input of a multiplayer game 
      const history = useHistory();

      const handleClick = () => {
          history.push("/multiplayerNames"); //on click, this button navigates to the name input page 
      }
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
            <Link to="/singleplayerName" class= "active_button"> Single Player</Link>
            <p></p>
            <MultiPName/>     
            </div>
        </header>
      </div>
    );
  };
  export default GameMode; 