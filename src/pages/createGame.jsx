import React, { useState, useEffect, useRef, useContext } from "react";
import {GameContext} from './../gameContext';
import { Link } from "react-router-dom";

const CreateGame = () => {
    const {setDiff} = useContext(GameContext);
    const setDifficulty = (difficulty) => {
        setDiff(difficulty);
    };

    return (      
        <div className="App">
            <nav class="item">
                <h2 id="subject-challenge"> Create A Challenge</h2>
            </nav>
            <header>
            <div className="centerItems">
                <h2 id="challengeText"> Choose a Level </h2>
                <Link to="/cutOffMark" onClick={()=>setDifficulty('easy')} class= "active_button"> Easy</Link>
                <p></p>
                <Link to="/cutOffMark" onClick={()=>setDifficulty('medium')} class= "active_button"> Medium</Link>
                <p></p>
                <Link to="/cutOffMark" onClick={()=>setDifficulty('hard')} class= "active_button"> Hard</Link>
            </div>
            </header>
        </div>
    );
};
export default CreateGame; 