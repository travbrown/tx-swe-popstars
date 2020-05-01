//this page renders the game over page-- shows score and options to play a new game or return home
import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {GameContext} from './../gameContext';

const GameOver = () => {
  const {
    score, 
    scoreTwo, 
    username1,
    username2,
    mode, 
    challenge_goal, 
    differentGame
  } = useContext(GameContext);
  const [status, setStatus] = useState(null);

  const [declareWinner, setDeclareWinner] = useState(null);

  function getWinner(){  //checks to see which player won the game 
    if(score > scoreTwo) {
      setDeclareWinner(username1 + " wins with a total score of " + score + " points!");
    }
    else if(scoreTwo > score) {
      setDeclareWinner(username2 + " wins with a total score of " + scoreTwo + " points!");
    }
    else if (scoreTwo === score){
      setDeclareWinner("It's a tie!");
    }
  }

    function getStatus(){  //checks to see if challenge is passed or not
      if(score >= challenge_goal) {
        setStatus(" You Won this Challenge! ");
      }
      else if(challenge_goal > score) {
        setStatus(" You Lost this Challenge");
      }
    }
  
    useEffect(() => {
        getStatus();
        getWinner();
    }, []);

    const diffGame = () =>{
      differentGame();
    };

    return (
      <div className="App">
          <header className="App-header">
             { mode === 'single-player' && 
                <>
                  <h1>GAME OVER</h1>
                  <br></br>
                  <h2> Score: {score} </h2>
                  <br></br>
                  <Link to="/countdown" class= "active_button"> PLAY AGAIN</Link>
                  <p></p>
                  <Link to="/Leaderboard" class="active_button">Leaderboard</Link>
                  <p></p>
                  <Link to="/gameMode" onClick={diffGame} class= "default_button"> HOME </Link> 
                </>
             }
             
            { mode === 'create-game' &&
               <>
                <h1>CHALLENGE COMPLETED</h1>
                <br></br>
                <h2> Score: {score} / {challenge_goal} </h2>
                <p></p>
                <h1> {status} </h1>
                <p><p></p></p><p><p></p></p><p><p></p></p><p><p></p></p>
                <Link to="/countdown" class= "active_button"> PLAY AGAIN</Link>
                <p></p> <p></p>
                <Link to="/gameMode" onClick={diffGame} class= "default_button"> HOME</Link> 
               </>
            }

            { mode === 'multiplayer' &&
              <>
                <h1> TIME'S UP!</h1>
                <h2> Score: {scoreTwo} </h2>
                <p></p> <p></p>
                <h1> {declareWinner} </h1>
                <p></p> <p></p><p></p> <p></p>
                <p></p> <p></p><p></p> <p></p>
                <Link to="/gameMode" onClick={diffGame} class= "active_button"> HOME </Link> 
              </>
            }              
          </header>
        </div>
    );
  };
  export default GameOver;