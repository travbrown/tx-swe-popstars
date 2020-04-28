import React, { useState, useEffect, useCallback, useRef } from "react";
import { Howl } from "howler";
import SpotifyWebApi from "spotify-web-api-js";
import DisplayScore from "./displayScore.jsx";
import PlayerOneBubble from "./playerOneContainer.jsx";
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

const PlayerOneGame = () => {
    const spotifyApi = new SpotifyWebApi();

    const [playlist, setPlaylist] = useState(null);
    const [artists, setArtists] = useState(null);
    const [track, setTrack] = useState(null);

    const [songIndex, setSongIndex] = useState(0);
    const [artistIndex, setArtistIndex] = useState(0);

    const [soundHowl, setSoundHowl] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const ref = useRef(null);
  
    const wrapperSetScore = delta => {
        ref.current.addToScore(delta);
     };

    const shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
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
          setTrack(playlist[songIndex + 1]);
          setSongIndex(songIndex + 1);
        },
        onend: function() {
        }
      })
    );
  };

  shuffle(artistsFaces);
  var name1 = localStorage.getItem('name1'); 
  var name2 = localStorage.getItem('name2'); 
  
  return (
    <div className="App">
      <button id="autoPlay" style={{ display: "none" }} onClick={playMusic}>
        can you see me?
      </button>

      <nav class="item">
        <h2 id="username"> {name1}</h2>
        <h2 id="subject"> SCORE: <DisplayScore ref={ref} /> </h2>
      </nav>

      <div id="background-wrap">
        {artistsFaces.map((item, idx) => (
          <>
            <PlayerOneBubble
              key={item.name}
              image={item.image}
              hasArtist
              number={idx}
              name={item.name}
              wrapperSetScore = {wrapperSetScore}
              artists = {artists}
              artistIndex = {artistIndex}
              nextSong = {nextSong}
            />
          </>
        ))}
      </div>
    </div>
  );
};

localStorage.setItem("Score1",DisplayScore);
export default PlayerOneGame;