//this is the countdown page for player one in multiplayer. 
//this will give the first player a chance to get ready before the game starts

import React, { useState, useEffect, useContext } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import {GameContext} from './../gameContext';
import './countdown.css';
import {useHistory} from 'react-router-dom';

const PlayerOnePage = () => {
    const FULL_DASH_ARRAY = 3000;
    const WARNING_THRESHOLD = 5;
    const ALERT_THRESHOLD = 3;

    const COLOR_CODES = {   //this changes the color of the timer as it goes from 5 to 0.
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
    };

    const TIME_LIMIT = 5;   //timer is set for 5 seconds
    let remainingPathColor = COLOR_CODES.info.color;
    useEffect(() => {
        getPlaylist();
      }, []);
  
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
    let history = useHistory();
    const spotifyApi = new SpotifyWebApi();
    const [playlistobject, setPlaylistObject] = useState(null);
    const {setPlaylist, access_token, playlist_code } = useContext(GameContext);
    const shuffle = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    useEffect(() => {
        const interval = timeLeft > 0 && setInterval(() => {
            setTimeLeft(timeLeft => timeLeft - 1);
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
          }, 1000);
        if (timeLeft === 0) {   
            history.push({
                pathname:"/playerOneGame",
                state: {playlist: playlistobject},
            });
        }
        return () => clearInterval(interval);
    }, [timeLeft, setCircleDasharray, setRemainingPathColor]);

     
    const getPlaylist = async () => {
        let playlist = null;
        try {
          spotifyApi.setAccessToken(access_token);
          playlist = await spotifyApi.getPlaylistTracks(playlist_code);
          let foundSongs = [];
          for (const item of playlist.items) {
            if (item.track.preview_url == null) continue;
            foundSongs.push({
              artist_name:item.track.artists[0].name, 
              song_name: item.track.name, 
              prev_url: item.track.preview_url });
          }
          console.log(foundSongs);
          shuffle(foundSongs);  //shuffles the songs so it does not play in a particular order
          setPlaylistObject(foundSongs);
        } catch (error) {
          alert('Our access to Spotify has expired.\nPress OK to login and refresh our access');
          history.push('/');
          console.log('Need to login again: ',error);
          return;
        }
      };
      
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 3000`;
      document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }    

    let name1 = localStorage.getItem('name1'); //gets player one's name

    return (
      <div className="App">
        <nav class="item">
            <h2 id="username"> {name1} </h2>
            <h2 id="subject-getreadyp1"> Get ready </h2>
          </nav>
        
       <div className="centerItems">
            <div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path
                    id="base-timer-path-remaining"
                    stroke-dasharray="3000"
                    class="base-timer__path-remaining ${remainingPathColor}"
                    d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                    " ></path>
                </g>
            </svg>
            <span id="base-timer-label" class="base-timer__label">{formatTime(timeLeft)}</span>
            </div></div>
      </div>
    );
};

export default PlayerOnePage;