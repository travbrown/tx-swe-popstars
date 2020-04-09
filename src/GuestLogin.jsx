import React, { useState, useEffect } from 'react';
import * as $ from "jquery";
import { Link } from "react-router-dom";
import GuestLoginPage from './GuestLoginPage';
import  { Redirect } from 'react-router-dom'
import NameInput from './nameInput'
import { useHistory } from 'react-router-dom';

function GuestLogin() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/nameInput");
    }

  return (
    <button onClick={handleClick}>
      Login as Guest
    </button>
  );
}
export default GuestLogin;




