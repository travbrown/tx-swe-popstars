import React from "react";
import { Link } from "react-router-dom";
import logo from "../popstarslogo.png"

const MultiplayerPage = () => {
    return (
        <div className="App">
          <div class ="item">Username</div>
          <div class ="item">Difficulty</div> 
          <img src={logo} className="App-logo" alt="logo" />
          <header className="App-header">
            <Link to="/playerOne" class= "active_button"> Easy</Link>
            <p></p>
            <Link to="/playerOne" class= "active_button"> Medium</Link>
            <p></p>
            <Link to="/playerOne" class= "active_button"> Hard</Link>
            <p></p><p></p>

            <Link to="/difficultyPage" class= "default_button"> Back</Link>  
          </header>
        </div>
    );
};
  
export default MultiplayerPage;
