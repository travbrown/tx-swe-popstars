import React from "react";
import './difficultyPage.css';
import { Link } from "react-router-dom";

const TimeUp1 = () => {
    return (
      <div className="App">
           <header className="App-header">
                <h1> TIME'S UP!</h1>
                <h2> Score: 0 </h2>
                <h1> PLAYER TWO'S TURN</h1>
                <Link to="/playerTwo" class= "active_button"> START</Link> 
            </header>
        </div>
    );
  };
  export default TimeUp1;
