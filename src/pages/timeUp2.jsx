import React from "react";
import './index.css';
import { Link } from "react-router-dom";

const TimeUp2 = () => {
    return (
      <div className="App">
           <header className="App-header">
                <h1> TIME'S UP!</h1>
                <h2> Score: 10 </h2>
                <h1> PLAYER TWO WINS</h1>
                <Link to="/" class= "active_button"> HOME </Link> 
            </header>
        </div>
    );
  };
  export default TimeUp2;