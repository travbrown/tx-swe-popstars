import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";

var score = localStorage.getItem('score'); 

const TimeUp2 = () => {
    return (
      <div className="App">
           <header className="App-header">
                <h1> TIME'S UP!</h1>
                <h2> Score: {score} </h2>
                <p></p> <p></p>
                <Link to="/gameMode" class= "active_button"> HOME </Link> 
            </header>
        </div>
    );
  };
  export default TimeUp2;
