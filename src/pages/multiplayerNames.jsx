import React, { useState, useEffect } from 'react';
import * as $ from "jquery";
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import { render } from '@testing-library/react';


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
        
        <center><h2>Player One</h2></center>
            <input type="text" name="name1" onBlur={event => setName1(event.target.value)}></input>
            
     <br></br>
   
     
     <center><h2>Player Two</h2></center>
        <input type="text" name="name2" onBlur={event => setName2(event.target.value)}></input>
        <br></br>
     
        <br></br>
        <button onClick={handleClick} >NEXT</button></header>
        <h2>{name1}</h2>
        <h2>{name2}</h2>
        </div>
  
    );

}
  export default NameOneInput; 


  