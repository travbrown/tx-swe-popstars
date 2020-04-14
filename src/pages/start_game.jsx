import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="App">
      <div class ="item">Username</div>
      <header className="App-header">
        <Link to="/countdown" class= "active_button"> START GAME</Link>
        <p></p>
        <p></p>
        <Link to = "/difficultyPage" class = "default_button"> Back </Link>
      </header>
    </div>
  );
};

export default StartPage;