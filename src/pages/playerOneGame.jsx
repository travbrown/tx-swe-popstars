import React, {useState, useEffect} from "react";
import {Howl, Howler} from 'howler';
import SpotifyWebApi from 'spotify-web-api-js';
import { Link } from "react-router-dom";
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
    { name: "A$AP Ferg", image: asap_ferg },
    { name: "A$AP Rocky", image: asap_rocky},
    { name: "Cardi B", image: cardi_b },
    { name: "Drake", image: drake },
    { name: "Lil Wayne", image: lil_wayne },
    { name: "Tupac", image: tupac },
    { name: "Kanye West", image: kanye_west },
    { name: "Jcole", image: jcole },
    { name: "Nicki Minaj", image: nicki_minaj },
    { name: "Beyonce", image: beyonce }
];


const PlayerOneGame = () => {
    const spotifyApi = new SpotifyWebApi();
  const [playlist, setPlaylists] = useState(null);
  const [track, setTrack] = useState(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [soundHowl, setSoundHowl] = useState(null);
  const [artists, setArtists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  localStorage.setItem('User Score', score);


  const Bubble = ({ number, hasArtist, image, name }) => {
    const [clicked, setClicked] = useState(false);
    const checkAnswer = ()=> {
        setClicked(true)
        if (name === artists[trackIndex]) {
            setScore(score + 5);
        }
    };
  
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
            alt= "bubble pic"
            src={image}
          />
        </div>
      );
    };
 
  const doSumn = async token => {
    await getPlaylist(token);
  };
  useEffect(() => {
    let token = localStorage.getItem("access_token");
    doSumn(token);
  }, []);

  const getPlaylist = async access_token => {
    spotifyApi.setAccessToken(access_token);
    //Couldn't get the Promise implementation to work
    //spotifyApi.setPromiseImplementation(Q);
    await spotifyApi
      .getPlaylistTracks("4h4V4Cbn8sjznAc3uirZmK")
      .then(
        function(data) {
          let foundSongs = [];
          let artist = [];
          //console.log('My Rap Playlist', data.items);
          data.items.forEach(item => {
            if (item.track.preview_url !== null && foundSongs.length < 10) {
              artist.push(item.track.artists[0].name);
              foundSongs.push(item.track.preview_url);
            }
          });
          setTrack(foundSongs[trackIndex]);
          setArtists(artist);
          setPlaylists(foundSongs);
        },
        function(err) {
          console.error(err);
        }
      )
      .catch(e => console.log(e));
    document.getElementById("autoPlay").click();
  };

  useEffect(() => {
    if (soundHowl) soundHowl.play();
  }, [soundHowl]);
  const playMusic = () => {
    setSoundHowl(
      new Howl({
        src: [track],
        html5: true,
        format: ["mp3", "aac"],
        autoplay: false,
        loop: false,
        volume: 0.5,
        onload: function() {
          console.log("LOADED!!");
          //setSongLoadState(true);
        },
        onend: function() {
          console.log("Finished!");
        }
      })
    );
  };
  var name1 = localStorage.getItem('name1'); 
  var name2 = localStorage.getItem('name2'); 
  return (
    <div className="App">
      <nav class="item">

            <h2 id="username"> {name1}</h2>
            <h2 id="subject"> score: {score} </h2>
            <h2 id="end-btn"><Link to="/timeUp1"> <button id="end">END</button></Link></h2>
          </nav>
    <button
        id="autoPlay"
        style={{ display: "none" }}
        onClick={playMusic} > can you see me? 
    </button>
    
      
      <div id="background-wrap">
        {artistsFaces.map((item, idx) => (
          <>
            <Bubble
              key={idx}
              image={item.image}
              hasArtist
              number={idx}
              name={item.name}
            />
          </>
        ))}
      </div>
      
    </div>
  );
};
export default PlayerOneGame;