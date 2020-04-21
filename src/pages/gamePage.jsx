import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import SpotifyWebApi from "spotify-web-api-js";
import Bubble from "./bubbleContainer.jsx";
import "./gamePage.css";
import { Link } from "react-router-dom";
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
import davido from "../photos/davido.jpg";
import Justin_beiber from "../photos/Justin_beiber.jpg";
import lizzo from "../photos/lizzo.jpeg";
import rihanna from "../photos/rihanna.jpg";
import wiz_khalifa from "../photos/wiz_khalifa.png";

let artistsFaces = [
    { name: "A$AP Ferg", image: asap_ferg },
    { name: "A$AP Rocky", image: asap_rocky },
    { name: "Cardi B", image: cardi_b },
    { name: "Drake", image: drake },
    { name: "Lil Wayne", image: lil_wayne },
    { name: "2Pac", image: tupac },
    { name: "Kanye West", image: kanye_west },
    { name: "J. Cole", image: jcole },
    { name: "Nicki Minaj", image: nicki_minaj },
    { name: "Beyoncé", image: beyonce },
    { name: "Davido", image: davido },
    { name: "Justin Beiber", image: Justin_beiber },
    { name: "Lizzo", image: lizzo },
    { name: "Rihanna", image: rihanna },
    { name: "Wiz Khalifa", image: wiz_khalifa },
];

const GamePage = () => {
    const spotifyApi = new SpotifyWebApi();

    const [playlist, setPlaylist] = useState(null);
    const [artists, setArtists] = useState(null);
    const [track, setTrack] = useState(null);

    const [songIndex, setSongIndex] = useState(0);
    const [artistIndex, setArtistIndex] = useState(0);

    const [soundHowl, setSoundHowl] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const [score, setScore] = useState(0);
    localStorage.setItem("score", score);

    const wrapperSetScore = val => {
       setScore(val);
       console.log(val);
    };

    const shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        console.log(artistsFaces);
        //return array;
    };


  const nextSong = () => {
    shuffle(artistsFaces);
    soundHowl.stop();
    setArtistIndex(artistIndex + 1);
    playMusic();
  };

  useEffect(() => {
    let token = localStorage.getItem("access_token");
    makeSpotifyCall(token);
  }, []);

  const makeSpotifyCall = async token => {
    await getPlaylist(token);
  };

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
          data.items.forEach(item => {
            if (item.track.preview_url !== null && foundSongs.length < 10) {
              artist.push(item.track.artists[0].name);
              foundSongs.push(item.track.preview_url);
            }
          });
          setTrack(foundSongs[songIndex]);
          setArtists(artist);
          setPlaylist(foundSongs);
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
          setTrack(playlist[songIndex + 1]);
          setSongIndex(songIndex + 1);
        },
        onend: function() {
          console.log("Finished!");
        }
      })
    );
  };

  shuffle(artistsFaces);
  
  return (
    <div className="App">
      <button id="autoPlay" style={{ display: "none" }} onClick={playMusic}>
        can you see me?
      </button>
      
      <div class="item">Username</div>
      <div class="item">SCORE: {score}</div>
      
      <div id="background-wrap">
        {artistsFaces.map((item, idx) => (
          <>
            <Bubble
              key={item.name}
              image={item.image}
              hasArtist
              number={idx}
              name={item.name}
              wrapperSetScore = {wrapperSetScore}
              score = {score}
              artists = {artists}
              artistIndex = {artistIndex}
              nextSong = {nextSong}
            />
          </>
        ))}
      </div>
      <button className="quit_button" onClick={() => setShowModal(true)}>
        QUIT
      </button>
      <div
        className={showModal ? "modal show" : "modal"}
        onClick={() => setShowModal(false)}
      >
        <div id="modalContainer">
          <h1>Are you sure you want to quit?</h1>
          <a class="quit" href="/gameMode">
            QUIT
          </a>
          <a class="cancel" href="#">
            CANCEL
          </a>
        </div>
      </div>
    </div>
  );
};

export default GamePage;