//this page renders the game over page-- shows score and options to play a new game or return home
import React from "react";
import './difficultyPage.css';
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import {GameContext} from './../gameContext';

const GameOver = (props) => {
    const {score, mode, challenge_goal, differentGame} = useContext(GameContext);

    // useEffect( () => {
    //   let displayText = '';
    //   if(mode === 'create-game'){
    //     displayText = 'CONGRATULATIONS';
    //   }else{

    //   }

    // },[]);

    const diffGame = () =>{
      differentGame();
    };

    return (
      <div className="App">
           <header className="App-header">
                <h1>GAME OVER</h1>
                <p><p></p></p><p><p></p></p>
                <h2> Score: {score} </h2>
                <p><p></p></p><p><p></p></p><p><p></p></p><p><p></p></p>
                <Link to="/countdown" class= "active_button"> PLAY AGAIN</Link>
                <p></p>
                <Link to="/Leaderboard" class="active_button">Leaderboard</Link>
                <p></p>
                <Link to="/gameMode" onClick={diffGame} class= "default_button"> HOME </Link> 
            </header>
        </div>
    );
  };
  export default GameOver;