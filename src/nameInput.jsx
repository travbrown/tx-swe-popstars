import React, { useState, useEffect } from 'react';
import * as $ from "jquery";
import { Link } from "react-router-dom";
import GuestLoginPage from './GuestLoginPage';
import  { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'

function NameInput(){

    
    
 return( 
     <div>
     <textarea>Guest Name</textarea>
     </div>
       
    );
  
}
  export default NameInput; 