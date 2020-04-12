import React, {useEffect} from "react";
import './index.css';
import {Howl, Howler} from 'howler';
import SpotifyWebApi from 'spotify-web-api-js';

import { Link } from "react-router-dom";

const DifficultyPage = () => {

  const spotifyApi = new SpotifyWebApi();
  function getParameterByName(name) {
    var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  
  function getAccessToken() {
    return getParameterByName('access_token');
  }

  function getSong(access_token) {
    spotifyApi.setAccessToken(access_token);
    //Couldn't get the Promise implementation to work
    //spotifyApi.setPromiseImplementation(Q);
    spotifyApi.searchTracks("God Damn Masicka").then(
      function(data) {
        let foundSongs = '';
        console.log('Search by "God Damn Masicka"', data.tracks);
        data.tracks.items.forEach(item => {
          foundSongs = item.preview_url;
        });
        //setSongs(foundSongs);
        playMusic(foundSongs);
      },
      function(err) {
        console.error(err);
      }
    );
  }

  function playMusic(song) {
    const sound = new Howl({
      src: [song],
      html5: true,
      format: ["webm","mp3", "aac"],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function() {
        console.log("Finished!");
      }
    });
    sound.play();
  }
  
  useEffect(() => {
    // Set token
    console.log("UseEffect activated");
    let access_token = getAccessToken();
    console.log("Access Token:", access_token);
    localStorage.setItem('access_token', access_token);
    getSong(access_token);
  }, []);


  return (
    <div className="App">
      <div class ="item">Username</div>
      <div class ="item">Difficulty</div> 

      <header className="App-header">
        <Link to="/start_game" class= "active_button"> Easy</Link>
        <p></p>
        <Link to="/start_game" class= "active_button"> Medium</Link>
        <p></p>
        <Link to="/start_game" class= "active_button"> Hard</Link>
        <p></p><p></p>
        <Link to="/" class= "default_button"> Back</Link> 
        <p></p>
        <Link to="/multiplayerPage">Multi-Player</Link>   
      </header>
    </div>
  );
};

export default DifficultyPage;