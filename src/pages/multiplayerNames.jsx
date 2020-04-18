import React, { useState, useEffect } from 'react';
import * as $ from "jquery";
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';


function NameOneInput(){
    const history = useHistory();

    const handleClick = () => {
        history.push("/multiplayerPage");
        
    }

 return( 
     
    <div className="App">
        
    <header className="App-header" id="inputNames">
        <center><h2>Player One</h2></center>
            <textarea type="text" name="name1"></textarea>
     <br></br>
   
     
     <center><h2>Player Two</h2></center>
        <textarea type="text" name="name2"></textarea>
        <br></br>
     
        <br></br>
        <button onClick={handleClick}>NEXT</button></header>
        </div>
  
    );
  
}
  export default NameOneInput; 