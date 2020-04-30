//game over page after playerOne for multiplayer

import React, { useState, useEffect} from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {GameContext} from './../gameContext';

const TimeUp2 = () => {
  const {score} = useContext(GameContext);
  const {scoreTwo} = useContext(GameContext);
  let name1 = localStorage.getItem('playerOneName'); 
  let name2 = localStorage.getItem('playerTwoName'); 
  const [declareWinner, setDeclareWinner] = useState(null);

  function getWinner(){  //checks to see which player won the game 
    if(score > scoreTwo) {
      setDeclareWinner(name1 + " wins with a total score of " + score + " points!");
    }
    else if(scoreTwo > score) {
      setDeclareWinner(name2 + " wins with a total score of " + scoreTwo + " points!");
    }
    else if (scoreTwo === score){
      setDeclareWinner("It's a tie!");
    }
  }

  useEffect(() => {
    getWinner();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> TIME'S UP!</h1>
        <h2> Score: {scoreTwo} </h2>
        <p></p> <p></p>
        <h1> {declareWinner} </h1>
        <p></p> <p></p><p></p> <p></p>
        <p></p> <p></p><p></p> <p></p>
        <Link to="/gameMode" class= "active_button"> HOME </Link> 
      </header>
    </div>
  );
};

export default TimeUp2;