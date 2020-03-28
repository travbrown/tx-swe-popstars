import React from "react";
import Button from '@material-ui/core/Button';
import './index.css';
import { Link } from "react-router-dom";

const DifficultyPage = () => {
  return (
    <div className="App">
      <h2> Username </h2>
      <div className="App2">
        <h1> Difficulty </h1>
      </div>
      <header className="App-header">
        <Link to="/start_game" class= "button" >Easy</Link>
        <p></p>
        <Link to="/start_game" class= "button" >Medium</Link>
        <p></p>
        <Link to="/start_game" class= "button" >Hard</Link>
        <p></p><p></p>
        <Link to="/" class= "button2" >Back</Link>    
      </header>
    </div>
  );
};

export default DifficultyPage;