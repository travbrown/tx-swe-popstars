import React from "react";
import './gamePage.css';

const GamePage = () => {
    return (
      <div className="App">
            <div class ="item">Username</div>
            <div class ="item">score: 0</div>   
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

            <a class="quit_button" href="#quit_button"> QUIT</a> 
            <div id="quit_button" class="overlay">
            <div class="popup">
                <h2> Are you sure you want to quit? </h2>
                <a class = "yes" href="/"> YES </a>
                <a class = "no" href="#"> NO </a>
            </div>
            </div>

        </div>
    );
  };
  export default GamePage;