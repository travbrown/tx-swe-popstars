import React from 'react';
import logo from "../popstarslogo.png";
import Button from '@material-ui/core/Button';
import '../App.css';
export const authEndpoint = 'https://accounts.spotify.com/authorize?';

const SpotifyLoginPage = () => {
  //Lauren's
  //const clientId = "d686743392b64810a7a8c2b5d56bf5c6";

  //Travis
  const clientId = "6ba9b22fdb4e467197055100a53c4a90";
  const redirectUri = "https://popstars-76cdd.firebaseapp.com/gameMode";

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
> Login with Spotify
</Button>
    </div>
  )
};

export default SpotifyLoginPage;