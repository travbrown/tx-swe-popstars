import React, {useState, useEffect} from "react";
import {Howl, Howler} from 'howler';
import SpotifyWebApi from 'spotify-web-api-js';
import './gamePage.css';

const GamePage = () => {

    const spotifyApi = new SpotifyWebApi();
    const [songLoadState, setSongLoadState] = useState(false);
    const [playlist, setPlaylist] = useState([]);


    function getPlaylist(access_token) {
        spotifyApi.setAccessToken(access_token);
        //Couldn't get the Promise implementation to work
        //spotifyApi.setPromiseImplementation(Q);
        spotifyApi.getPlaylistTracks('5I5JG3z1Bbk70WFz8i2OEf').then(
            function(data) {
                let foundSongs = [];
                console.log('My Rap Playlist', data.items);
                data.items.forEach(item => {
                    if(item.track.preview_url !== null && foundSongs.length < 10){
                    console.log(item.track.preview_url);
                    foundSongs.push(item.track.preview_url);
                    }     
                });   
                setPlaylist(foundSongs);             
                //playMusic(foundSongs);
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
            format: ["mp3", "aac"],
            autoplay: false,
            loop: false,
            volume: 0.5,
            onload: function(){
                console.log('LOADED!!');
                //setSongLoadState(true);
            },
            onend: function() {
                console.log("Finished!");
            }
            
        });
        sound.play();
    }

    useEffect(() => {
        let token = localStorage.getItem('access_token');
        getPlaylist(token);
        document.getElementById("autoPlay").click();
    },[])

    // useEffect(() =>{
    //     sound.ctx.resume();
    // },[songLoadState]);

    return (
      <div className="App">
            <button id="autoPlay" style={{ display: "none" }} onClick={playMusic(playlist)}>
                can you see me?
            </button>
            <div class ="item">Username</div>
            <div class ="item">score: 0</div>   
            <div id="background-wrap">
                <div class="bubble x1"></div>
                <div class="bubble x2"></div>
                <div class="bubble x3"></div>
                <div class="bubble x4"></div>
                <div class="bubble x5"></div>
                <div class="bubble x6"></div>
                <div class="bubble x7"></div>
                <div class="bubble x8"></div>
                <div class="bubble x9"></div>
                <div class="bubble x10"></div>
            </div>

            <a class="quit_button" href="#quit_button"> QUIT</a> 
            <div id="quit_button" class="overlay">
            <div class="popup">
                <h2> Are you sure you want to quit? </h2>
                <a class = "yes" href="/"> YES </a>
                <a class = "no" href="#"> NO </a>
            </div>
            </div>

        </div>
    );
  };
  
  export default GamePage;