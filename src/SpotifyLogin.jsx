import React from 'react';

import {
  Link
} from "react-router-dom";
import SpotifyLoginPage from './SpotifyLoginPage';

const SpotifyLogin = () => {

    return ( 
      <div>
        <button>
    <Link to={"/SpotifyLoginPage"} class= "active_button">Login with Spotify</Link></button>
    {/* <br></br>
    <button><Link to="/GuestLogin" class= "active_button">Login as a Guest</Link></button> */}
    </div>
  );
}
export default SpotifyLogin;