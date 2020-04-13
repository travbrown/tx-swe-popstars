import React, {useState, useEffect} from "react";
import {Howl, Howler} from 'howler';
import SpotifyWebApi from 'spotify-web-api-js';
import './gamePage.css';
import asap_ferg from "../photos/ASAP_Ferg.png";
import asap_rocky from "../photos/ASAP_Rocky.png";
import cardi_b from "../photos/cardi_b.png";
import drake from "../photos/drake.png";
import lil_wayne from "../photos/lil_wayne.png";
import tupac from "../photos/tupac.png";

let artistsFaces = [
    {name: 'ASAP Ferg', image: asap_ferg},
    {name: 'ASAP Rocky', image: asap_rocky},
    {name: 'Cardi B', image: cardi_b},
    {name: 'Drake', image: drake},
    {name: 'Lil Wayne', image: lil_wayne},
    {name: 'Tupac', image: tupac},
]

const Bubble = ({ number, hasArtist, image }) => {
    return (
      <div class={`bubble x${number}`}>
        <img
          style={{
            display: hasArtist ? "inline-block" : "none",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "50%"
          }}
          alt="bubble pic"
          src={image}
        />
      </div>
    );
  };

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

    return (
        <div className="App">
             <button id="autoPlay" style={{ display: "none" }} onClick={playMusic(playlist)}>
                can you see me?
            </button>
            <div class ="item">Username</div>
            <div class ="item">score: 0</div>   
            <div id="background-wrap">
            {artistsFaces.map((item, idx) => (
                <>
                <Bubble
                key={idx}
                image={item.image}
                hasArtist
                number={Math.round(Math.random() * 10)}
                />
                <Bubble
                key={idx}
                number={Math.round(Math.random() * 10)}
                />
                </>
            ))}
            </div>

            <a class="quit_button" href="#quit_button"> QUIT</a> 
            <div id="quit_button" class="overlay">
            <div class="popup">
                <h2> Are you sure you want to quit? </h2>
                <a class = "quit" href="/difficultyPage"> QUIT </a>
                <a class = "cancel" href="#"> CANCEL </a>
            </div>
            </div>
        </div>
    );
  };
  
  export default GamePage;