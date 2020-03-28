import React from "react";
import Button from '@material-ui/core/Button';
import './index.css';
import { Link } from "react-router-dom";

const startPage = () => {
  return (
    <div className="App">
      <h2> Username </h2>
      <header className="App-header">
        <Link to="/" class= "button" > START GAME</Link>
        <p></p>
        <p></p>
        <Link to="/" class= "button2" >Back</Link>       
      </header>
    </div>
  );
};

export default startPage;