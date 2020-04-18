import React, { useState, useEffect } from 'react';
import * as $ from "jquery";
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import { render } from '@testing-library/react';
import logo from "../popstarslogo.png"

function NameOneInput(){
  
    const history = useHistory();

    const handleClick = () => {
        history.push("/multiplayerPage");
    
    }

    
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState(""); 

 return( 
     
    <div className="App">
        
    <header className="App-header" id="inputNames">
    <img src={logo} className="App-logo" alt="logo" />
        <center><h2>Player One: {name1}</h2></center>
            <input type="text" name="name1" onBlur={event => setName1(event.target.value)}></input>
           
    
   
     
     <center><h2>Player Two: {name2}</h2></center>
        <input type="text" name="name2" onBlur={event => setName2(event.target.value)}></input>
     <br></br>
    
        <button onClick={handleClick} id="next">NEXT</button></header>
        
        
        </div>
  
    );

}
  export default NameOneInput; 


  