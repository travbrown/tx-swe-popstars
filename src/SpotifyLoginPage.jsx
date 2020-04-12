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
  const clientSecret = "6dc7ed667d824b27b65770f3c4052a0c";
  const redirectUri = "http://localhost:3000/index";

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
        style={{ marginTop: "-300px", height: "100px", width: "400px", fontSize: "30px"}}
        variant="outlined"
        color="secondary"
        href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login with Spotify
      </Button>
    </div>
  )
};
export default SpotifyLoginPage;
