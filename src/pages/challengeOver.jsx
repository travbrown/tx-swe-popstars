//this is the end game page for created challenges

import React, { useState, useEffect} from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {GameContext} from './../gameContext';

let maxScore = localStorage.getItem('winningScore');  //the winning score the challenger sets

const ChallengeOver = () => {
  const {score} = useContext(GameContext);
    const [status, setStatus] = useState(null);

    function getStatus(){  //checks to see if challenge is passed or not
      if(score >= maxScore) {
        setStatus(" You Won this Challenge! ");
      }
      else if(maxScore > score) {
        setStatus(" You Lost this Challenge");
      }
    }
  
    useEffect(() => {
        getStatus();
    }, []);

    return (
      <div className="App">
           <header className="App-header">
                <h1> game over</h1>
                <p><p></p></p><p><p></p></p>
                <h2> Score: {score} / {maxScore} </h2>
                <p></p>
                <h1> {status} </h1>
                <p><p></p></p><p><p></p></p><p><p></p></p><p><p></p></p>
                <Link to="/playlistOne" class= "active_button"> PLAY AGAIN</Link>
                <p></p> <p></p>
                <Link to="/gameMode" class= "default_button"> HOME</Link> 
            </header>
        </div>
    );
  };
  export default ChallengeOver;