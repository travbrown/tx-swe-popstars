import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';


function SinglePlayer (){
    const history = useHistory();

    const handleClick = () => {
        history.push("/gamePage");
    }

return (
    <button onClick={handleClick}>
     Single Player
    </button>

);
}

export default SinglePlayer; 