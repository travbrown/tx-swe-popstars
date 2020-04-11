import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';


function MultiPlayer (){
    const history = useHistory();

    const handleClick = () => {
        history.push("/multiplayerPage");
    }


return (
    <div><button onClick={handleClick}>
      MultiPlayer
    </button><br></br></div>
   
);
}

export default MultiPlayer; 