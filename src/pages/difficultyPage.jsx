// users can choose their level of difficulty from easy, medium, or hard
import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import {GameContext} from './../gameContext';
import { useContext } from "react";

const DifficultyPage = () => {
  const {setDiff} = useContext(GameContext);
  const setDifficulty = (diff) => {
    setDiff(diff);
  };

  return (
    <div className="App">
      <header>
        <div class ="item">
          <li id="subject-diff">Difficulty</li> 
        </div>
      </header>
  
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