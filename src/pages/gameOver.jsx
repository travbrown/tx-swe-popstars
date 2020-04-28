//this page renders the game over page-- shows score and options to play a new game or return home
import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {GameContext} from './../gameContext';

const GameOver = () => {

    let {differentGame} = useContext(GameContext);
    let score = localStorage.getItem('score');

    const diffGame = () =>{
      differentGame();
    };

    return (
      <div className="App">
           <header className="App-header">
                <h1> GAME OVER</h1>
                <p><p></p></p><p><p></p></p>
                <h2> Score: {score} </h2>
                <p><p></p></p><p><p></p></p><p><p></p></p><p><p></p></p>
                <Link to="/countdown" class= "active_button"> PLAY AGAIN</Link>
                <p></p>
                <Link to="/gameMode" onClick={diffGame} class= "default_button"> HOME </Link> 
                <p></p>
                <Link to="/Leaderboard" class="active_button">Leaderboard</Link>
            </header>
        </div>
    );
  };
  export default GameOver;