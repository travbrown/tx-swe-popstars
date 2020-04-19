import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import logo from "../popstarslogo.png"

const DifficultyPage = () => {
  return (
    <div className="App">
     
      <div class ="item">
        <li id="subject"><center>Difficulty</center></li> 
  </div>
      <header></header>
      <img src={logo} className="App-logo" alt="logo" height = "300px" />
      <div className="centerItems">
        <Link to="/start_game" class= "active_button" > Easy</Link>
        <p></p>
        <Link to="/start_game" class= "active_button"> Medium</Link>
        <p></p>
        <Link to="/start_game" class= "active_button"> Hard</Link>
        <p></p><p></p>
        <Link to="/gameMode" class= "default_button"> Back</Link>  
      </div>
    </div>
  );
};

export default DifficultyPage;