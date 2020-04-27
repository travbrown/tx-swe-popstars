import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";

var score1 = localStorage.getItem('score'); 

var name2 = localStorage.getItem('playerTwoName');

const TimeUp1Medium = () => {
    return (
       
           <header className="App-header">
                <h1> TIME'S UP!</h1>
                <h2> Score: {score1} </h2>
                <p></p> <p></p>
                <h1> {name2}'S TURN</h1>
               
                
                <Link to="/playerTwoMedium" class= "active_button"> START</Link> 
            </header>
     
    );
  };
  export default TimeUp1Medium;
