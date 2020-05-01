//game over page after playerOne for multiplayer

import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {GameContext} from './../gameContext';

const TimeUp1 = () => {
  const {score, username2} = useContext(GameContext);

    return (
      <header className="App-header">
          <h1> TIME'S UP!</h1>
          <h2> Score: {score} </h2>
          <p></p> <p></p>
          <h1> {username2}'S TURN</h1>
          
          
          <Link to="/playerTwo" class= "active_button"> START</Link> 
      </header>
    );
  };
  export default TimeUp1;