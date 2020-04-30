//multiplayers can choose their level of difficulty as well

import React from "react";
import { Link } from "react-router-dom";

const MultiplayerPage = () => {
  let name1 = localStorage.getItem('playerOneName'); 
  let name2 = localStorage.getItem('playerTwoName'); 
    return (
        <div className="App">
          <nav class="item">
            <h2 id="username"> {name1} / {name2} </h2>
            <h2 id="subject"> Difficulty </h2>
          </nav>
       
          <header >
            <div className="centerItems">
            <Link to="/playerOne" class= "active_button"> Easy</Link>
            <p></p>
            <Link to="/playerOne" class= "active_button"> Medium</Link>
            <p></p>
            <Link to="/playerOne" class= "active_button"> Hard</Link>
            <p></p><p></p>

            <Link to="/difficultyPage" class= "default_button"> Back</Link>  
            </div>
            
          </header>
        </div>
    );
};
  
export default MultiplayerPage;