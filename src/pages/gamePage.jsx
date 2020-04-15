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
import kanye_west from "../photos/kanye_west.png";
import jcole from "../photos/jcole.png";
import nicki_minaj from "../photos/nicki_minaj.png";
import beyonce from "../photos/Beyonce.png";

let artistsFaces = [
    {name: 'ASAP Ferg', image: asap_ferg},
    {name: 'ASAP Rocky', image: asap_rocky},
    {name: 'Cardi B', image: cardi_b},
    {name: 'Drake', image: drake},
    {name: 'Lil Wayne', image: lil_wayne},
    {name: 'Tupac', image: tupac},
    {name: 'Kanye West', image: kanye_west},
    {name: 'Jcole', image: jcole},
    {name: 'Nicki Minaj', image: nicki_minaj},
    {name: 'Beyonce', image: beyonce},
]

const Bubble = ({ number, hasArtist, image, name }) => {
    const [clicked, setClicked] = useState(false);
    
    //When right answer is clicked update score
    const checkAnswer = ()=> {
        setClicked(true)
        alert('wrong')
    }

    return (
      <div class={`bubble x${number}`}  
      style={{ display: clicked ? "none" : "flex" }}
      onClick={checkAnswer} >
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
    const [songs, setSong] = useState([]);
    const [artists, setArtists] = useState([]);
    // const [playlist, setPlaylist] = useState([]);


    function getPlaylist(access_token) {
        spotifyApi.setAccessToken(access_token);
        //Couldn't get the Promise implementation to work
        //spotifyApi.setPromiseImplementation(Q);
        spotifyApi.getPlaylistTracks('4h4V4Cbn8sjznAc3uirZmK').then(
            function(data) {
                let foundSongs = [];
                let artist = [];
                //console.log('My Rap Playlist', data.items);
                data.items.forEach(item => {
                    if(item.track.preview_url !== null && foundSongs.length < 10){
                        artist.push(item.track.artists[0].name);
                        foundSongs.push(item.track.preview_url);
                    }     
                });   
                console.log(artist);
                setArtists(artist);
                setSong(foundSongs);             
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
    },[]);

    return (
      <div className="App">
            <button id="autoPlay" style={{ display: "none" }} onClick={playMusic(songs)}>
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
                number={idx} />
                </>
            ))}

            </div>
            <a class="quit_button" href="#quit_button"> QUIT</a> 
            <div id="quit_button" class="overlay">
            <div class="popup">
                <h2> Are you sure you want to quit? </h2>
                <a class = "quit" href="/gameMode"> QUIT </a>
                <a class = "cancel" href="#"> CANCEL </a>
            </div>
            </div>
        </div>
    );
  };
  
  export default GamePage;