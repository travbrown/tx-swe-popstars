//multiplayers can choose their level of difficulty as well

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../gameContext";

const MultiplayerPage = () => {
  const {setDiff, username1, username2} = useContext(GameContext);
  const setDifficulty = (diff) => { setDiff(diff); };
  
  return (
    <div className="App">
      <nav class="item">
        <h2 id="username"> {username1} / {username2} </h2>
        <h2 id="subject"> Difficulty </h2>
      </nav>
    
      <header >
        <div className="centerItems">
        <Link to="/playerOne" onClick={()=>setDifficulty('easy')} class= "active_button"> Easy</Link>
        <p></p>
        <Link to="/playerOne" onClick={()=>setDifficulty('medium')} class= "active_button"> Medium</Link>
        <p></p>
        <Link to="/playerOne" onClick={()=>setDifficulty('hard')} class= "active_button"> Hard</Link>
        <p></p><p></p>

        <Link to="/difficultyPage" class= "default_button"> Back</Link>  
        </div>
        
      </header>
    </div>
  );
};
  
export default MultiplayerPage;