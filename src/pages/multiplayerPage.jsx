import React from "react";
import { Link } from "react-router-dom";
import logo from "../popstarslogo.png"

const MultiplayerPage = () => {
    return (
        <div className="App">
          <div class ="item">
            <li id="username">Username </li>
            <li id="subject"><center>Difficulty </center></li>
          </div>
          
          <header >
            <div className="centerItems">
            <img src={logo} className="App-logo" alt="logo" height = "300px" />
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
