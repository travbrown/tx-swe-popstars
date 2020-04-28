//This page lets the player control when their game will start -- simply contains a button directing to the countdown 
import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";

const StartPage = () => {


  return (
    <div className="App">
      <header>
         <nav class="item">
            <h2 id="subject-no-user">Get Ready</h2>
          </nav>
      </header>
    
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