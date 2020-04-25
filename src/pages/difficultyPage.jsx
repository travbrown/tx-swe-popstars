import React from "react";
import './difficultyPage.css';
import "./gamePage.css";
import { Link } from "react-router-dom";

const DifficultyPage = ({difficulty}) => {

  const setDifficulty = (difficulty) => {
    localStorage.setItem('difficulty', difficulty);
    let duration = difficulty === 'easy' ? "4s" : difficulty === 'medium' ? "2s" : "1s";
  };

  return (
    <div className="App">
      <div class ="item">
        <li id="subject-diff">Difficulty</li> 
      </div>
      <header></header>
  
      {/* <div className='bubble' style={{animationDuration: duration }} /> */}

      <div className="centerItems">
        <Link to="/countdown" onClick={()=>setDifficulty('easy')} class= "active_button"> Easy</Link>
        <p></p>
        <Link to="/countdown" onClick={()=>setDifficulty('medium')} class= "active_button"> Medium</Link>
        <p></p>
        <Link to="/countdown" onClick={()=>setDifficulty('hard')} class= "active_button"> Hard</Link>
        <p></p><p></p>
        <Link to="/gameMode" class= "default_button"> Back</Link>  
      </div>
    </div>
  );
};

export default DifficultyPage;