import React, { useState, useEffect } from 'react';
import * as $ from "jquery";
import { Link } from "react-router-dom";
import GuestLoginPage from './GuestLoginPage';
import  { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';

function NameInput(){
    const history = useHistory();

    const handleClick = () => {
        history.push("/multiplayerPage");
    }

    
    
 return( 
     <div>
     <textarea>Guest Name</textarea>
     <br></br>
     <button onClick={handleClick}>Play as Guest</button>
     </div>
       
    );
  
}
  export default gameMode; 