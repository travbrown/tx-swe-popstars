import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";

const GameOver = () => {
    return (
      <div className="App">
           <header className="App-header">
                <h1> GAME OVER</h1>
                <p><p></p></p><p><p></p></p>
                <h2> Score: 0 </h2>
                <p><p></p></p><p><p></p></p><p><p></p></p><p><p></p></p>
                <Link to="/start_game" class= "active_button"> PLAY AGAIN</Link>
                <p></p>
                <Link to="/gameMode" class= "default_button"> HOME </Link> 
            </header>
        </div>
    );
  };
  export default GameOver;