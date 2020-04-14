import React from 'react';
import logo from "./popstarslogo.png";
import Button from '@material-ui/core/Button';
import './App.css';
export const authEndpoint = 'https://accounts.spotify.com/authorize?';

const SpotifyLoginPage = () => {
  //Lauren's
  //const clientId = "d686743392b64810a7a8c2b5d56bf5c6";

  //Travis
  const clientId = "6ba9b22fdb4e467197055100a53c4a90";
  const redirectUri = "http://localhost:3000/difficultyPage";

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
<<<<<<< HEAD
      <button>
        <a href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
=======
      <Button
        style={{ marginTop: "-300px", height: "100px", width: "400px", fontSize: "30px"}}
        variant="outlined"
        color="secondary"
        href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
>>>>>>> afb9c1e93a2b472f7bbd9a1c5476654c09af6f1f
      >
        Login with Spotify</a>
      </button>
    </div>
  )
};
<<<<<<< HEAD
export default SpotifyLoginPage;
=======

export default SpotifyLoginPage;
>>>>>>> afb9c1e93a2b472f7bbd9a1c5476654c09af6f1f
