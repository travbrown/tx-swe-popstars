import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";

var score = localStorage.getItem('score'); 

const TimeUp1 = () => {
    return (
      <div className="App">
           <header className="App-header">
                <h1> TIME'S UP!</h1>
                <h2> Score: {score} </h2>
                <h1> PLAYER TWO'S TURN</h1>
                <p></p> <p></p>
                <Link to="/playerTwo" class= "active_button"> START</Link> 
            </header>
        </div>
    );
  };
  export default TimeUp1;
