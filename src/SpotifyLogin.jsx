import React from 'react';

import {
  Link
} from "react-router-dom";
import SpotifyLoginPage from './SpotifyLoginPage';

const SpotifyLogin = () => {

    return ( 
      <div> <div>
        <SpotifyLoginPage/>
      <Link to={"/SpotifyLoginPage"} class= "active_button">Login </Link></div>
</div>
  );
}
export default SpotifyLogin;