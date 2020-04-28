//This page allows the user to login through Spotify -- the first page the user sees
import React from 'react';
import logo from "./popstarslogo.png";
import './App.css';
export const authEndpoint = 'https://accounts.spotify.com/authorize?';

const SpotifyLoginPage = () => {
  //Lauren's
  //const clientId = "d686743392b64810a7a8c2b5d56bf5c6";

  //Travis
  const clientId = "6ba9b22fdb4e467197055100a53c4a90";
  const redirectUri = "http://localhost:3000/difficultyPage"; //site to redirect after login 

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
      <img src={logo} className="App-logo" alt="logo" width="100%" />
      <button>
        <a href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
      >
        Login with Spotify</a>
        
      </button>
    </div>
  )
};
export default SpotifyLoginPage;
