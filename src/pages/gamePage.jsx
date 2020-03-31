import React from "react";
import './gamePage.css';
import { Link } from "react-router-dom";

const GamePage = () => {
    return (
      <div className="App">
            <div class ="item">Username</div>
            <div class ="item">score: 0</div> 
            <Link to= "/" class= "quit_button"> QUIT</Link>    
            {/* Fix: Alert dialogue should pop up */}
     
            <div id="background-wrap">
                <div class="bubble x1"></div>
                <div class="bubble x2"></div>
                <div class="bubble x3"></div>
                <div class="bubble x4"></div>
                <div class="bubble x5"></div>
                <div class="bubble x6"></div>
                <div class="bubble x7"></div>
                <div class="bubble x8"></div>
                <div class="bubble x9"></div>
                <div class="bubble x10"></div>
            </div>
        </div>
    );
  };
  
  export default GamePage;