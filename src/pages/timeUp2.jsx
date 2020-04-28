import React, { useState, useEffect} from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";


const TimeUp2 = () => {

  var score1 = localStorage.getItem('score'); 
  var score2 = localStorage.getItem('scoreTwo'); 
  var name1 = localStorage.getItem('playerOneName'); 
  var name2 = localStorage.getItem('playerTwoName'); 

  const [declareWinner, setDeclareWinner] = useState(null);

  function getWinner(){
    if(score1 > score2) {
      setDeclareWinner(name1 + " wins with a total score of " + score1 + " points!");
    }
    else if(score2 > score1) {
      setDeclareWinner(name2 + " wins with a total score of " + score2 + " points!");
    }
    else if (score2 === score1){
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
        <h2> Score: {score2} </h2>
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