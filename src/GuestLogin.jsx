import React, { useState, useEffect } from 'react';
import logo from './popstarslogo.png';
import './App.css';
import * as $ from "jquery";
import Player from "./Player";
import { Link } from "react-router-dom";




  const GuestLogin = () => {

  return (

        
          <Link to="/GuestLogin" class= "active_button">Login as a Guest</Link>

  );
}

export default GuestLogin;


