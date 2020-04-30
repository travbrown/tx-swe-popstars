//game over page after playerOne for multiplayer

import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {GameContext} from './../gameContext';

const TimeUp1 = () => {
  const {score} = useContext(GameContext);
  let name2 = localStorage.getItem('playerTwoName');

    return (
      <header className="App-header">
          <h1> TIME'S UP!</h1>
          <h2> Score: {score} </h2>
          <p></p> <p></p>
          <h1> {name2}'S TURN</h1>
          
          
          <Link to="/playerTwo" class= "active_button"> START</Link> 
      </header>
    );
  };
  export default TimeUp1;