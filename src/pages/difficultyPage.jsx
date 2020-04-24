import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import logo from "../popstarslogo.png"

const DifficultyPage = () => {
  return (
    <div className="App">
     
      <div class ="item">
        <li id="subject-diff">Difficulty</li> 
  </div>
      <header></header>
  
      <div className="centerItems">
        <Link to="/countdown" class= "active_button" > Easy</Link>
        <p></p>
        <Link to="/countdown" class= "active_button"> Medium</Link>
        <p></p>
        <Link to="/countdown" class= "active_button"> Hard</Link>
        <p></p><p></p>
        <Link to="/gameMode" class= "default_button"> Back</Link>  
      </div>
    </div>
  );
};

export default DifficultyPage;