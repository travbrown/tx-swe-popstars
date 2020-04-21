import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";
var name1 = localStorage.getItem('name1'); 
var name2 = localStorage.getItem('name2');
const TimeUp1 = () => {
    return (
       
           <header className="App-header">
                <h1> TIME'S UP!</h1>
                <h2> Score: 0 </h2>
                <h1> {name2}'S TURN</h1>
               
                
                <Link to="/playerTwo" class= "active_button"> START</Link> 
            </header>
     
    );
  };
  export default TimeUp1;
