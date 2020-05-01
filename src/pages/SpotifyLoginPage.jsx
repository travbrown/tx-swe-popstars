import React from 'react';
import logo from "../popstarslogo.png";
import Button from '@material-ui/core/Button';
import '../App.css';
export const authEndpoint = 'https://accounts.spotify.com/authorize?';


/**
 * This function fires a request to Spotify with app credientials
 * and asking for user access. The redirect URI's must be registered
 * on the Spotify for Developers Account. 
 */
const SpotifyLoginPage = () => {
  const clientId = "8a209471b74949b6a706b5dc95571355";
  const redirectUri = "https://popstars-76cdd.firebaseapp.com/gameMode";
  //const redirectUri = "http://localhost:3000/gameMode";

  const scopes = [
    "user-read-currently-playing",
    "app-remote-control",
    "streaming",
    "user-modify-playback-state",
    "playlist-modify-public",
    "ugc-image-upload",
    "user-read-playback-state"
  ];

  return (
    <div style={{ height: "100vh", width: "100vw", margin: "auto" }}>
      <img src={logo} className="App-logo" alt="logo" />
      <Button
        style={{ borderRadius:"10px", marginTop: "-400px", marginLeft: "-40px", height: "80px", width: "320px", fontSize: "25px", backgroundColor: '#05D4EF', color: '#fff'}}
        variant="contained"
        href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login with Spotify
      </Button>
    </div>
  )
};

export default SpotifyLoginPage;