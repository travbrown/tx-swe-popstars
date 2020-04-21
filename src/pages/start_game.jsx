import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
import logo from "../popstarslogo.png"

const StartPage = () => {
  return (
    <div className="App">
      <nav class="item">
            <h2 id="subject-no-user">Get Ready</h2>
          </nav>
      <header></header>
    
      <div className="centerItems">
        <Link to="/countdown" class= "active_button"> START GAME</Link>
        <p></p>
        <p></p>
        <Link to = "/difficultyPage" class = "default_button"> Back </Link>
      </div>
    </div>
  );
};

export default StartPage;