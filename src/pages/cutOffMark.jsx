import React, { useState, useEffect, useRef, useContext } from "react";
import { useHistory } from 'react-router-dom';
import {GameContext} from './../gameContext';


const CutOffMark = () => { 
    const history = useHistory();
    const {difficulty} = useContext(GameContext);

    const [winningScore, setWinningScore] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [markLimit, setMarkLimit] = useState(getMarkLimit());

    localStorage.setItem('winningScore', winningScore);
    const handleClick = () => {
        if (winningScore > markLimit) {
            setShowModal(true)
        }
        else if (isNaN(winningScore)) {
            alert("Invalid value. Please enter a number!")
        }
        else { history.push('/choosePlaylist');}
    }
    const handleName = event => setWinningScore(event.target.value);

    function getMarkLimit(){
        if(difficulty === 'medium'){
          return 40;
        } else if (difficulty === 'hard'){
          return 60;
        }
        return 30;
    };

    return (      
        <div>
            <nav class="item">
                <h2 id="subject-challenge"> Create A Challenge</h2>
            </nav>
            <div className="centerItems">
                <h2 id="challengeText" > Set Winning Score</h2>  
                <h2 id="challengeDescription"> Enter the number of points that the player needs to get to win this challenge</h2>
                <p className="maxText"> Max Point you can set for this level is {markLimit} Points </p>  
                <br></br>
                <input type="value" placeholder= "Enter a number" value={winningScore} onChange={handleName}></input><br></br>
                <center>
                    <button onClick={handleClick} id="next">NEXT</button>
                </center>

                <div
                    className={showModal ? "modal show" : "modal"}
                    onClick={() => setShowModal(false)} >
                    <div id="modalContainer">
                        <h1 style={{ color: "#ec583b"}}> Error!</h1>
                        <h2>The value entered exceeds the max point for this level</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CutOffMark