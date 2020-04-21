import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
// import logo from "../popstarslogo.png"

const StartPage = () => {
  return (
    <div className="App">
      <div class ="item"> GET READY </div>
      {/* <div class = "item">
        <li id="subject"><center>GET READY</center></li> 
        </div> */}
      {/* <header></header> */}
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" height = "300px" /> */}
      {/* <div className="centerItems"> */}
        <Link to="/countdown" class= "active_button"> START GAME</Link>
        <p></p>
        <p></p>
        <Link to = "/difficultyPage" class = "default_button"> Back </Link>
      {/* </div> */}
      </header>
    </div>
  );
};

export default StartPage;