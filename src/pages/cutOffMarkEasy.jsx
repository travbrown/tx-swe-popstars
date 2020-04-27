import React, { useState, Component } from "react";
import { useHistory } from 'react-router-dom';

const EasyCutOff = ({easy_cut_off}) => <h2>{easy_cut_off}</h2> ; 
const Input = ({value, onChange, children}) => (
    <label>
        {children}
        <input type="value" value={value} onChange={onChange}/>
    </label>
)

const CutOffMarkEasy = () => { 
    const history = useHistory();
    const [maxEasy, setMaxEasy] = useState('');
    const [showModal, setShowModal] = useState(false);
    localStorage.setItem('maxEasy', maxEasy);

    const handleClick = () => {
        if (maxEasy > 30) {
            setShowModal(true)
        }
        else if (isNaN(maxEasy)) {
            alert("Invalid value. Please enter a number!")
        }
        else { history.push("/choosePlaylist");}
    }

    const handleName = event => setMaxEasy(event.target.value);

    return (      
        <div>
            <nav class="item">
                <h2 id="subject-challenge"> Create A Challenge</h2>
            </nav>
            <div className="centerItems">
                <h2 id="challengeText" > Cut-off Point</h2>  
                <br></br>
                <input type="value" placeholder= "Enter a number" value={maxEasy} onChange={handleName}></input><br></br>
                <center>
                    <button onClick={handleClick} id="next">NEXT</button>
                    <p className="maxText"> Max Point you can set for this level is 30 Points </p>
                </center>

                <div
                    className={showModal ? "modal show" : "modal"}
                    onClick={() => setShowModal(false)} >
                    <div id="modalContainer">
                        <h1> Error!</h1>
                        <h2>The value entered exceeds the max point for this level</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CutOffMarkEasy
export {EasyCutOff};