import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactHowler from "react-howler";
import SpotifyWebApi from "spotify-web-api-js";
import DisplayScore from "./displayScore.jsx";
import Bubble from "./bubbleContainer.jsx";
import "./gamePage.css";
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
import { Link } from "react-router-dom";

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

	const [songIndex, setSongIndex] = useState(0);
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
    console.log("Setting index to ", songIndex + 1);
    shuffle(artistsFaces);
    setSongIndex(songIndex + 1);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  const getPlaylist = async () => {
    let playlist = null;
    try {
      const access_token = localStorage.getItem("access_token");
      spotifyApi.setAccessToken(access_token);
      playlist = await spotifyApi.getPlaylistTracks("4h4V4Cbn8sjznAc3uirZmK");
    } catch (error) {
      console.log(error);
      return;
    }

    let artist = [];
    let foundSongs = [];
    for (const item of playlist.items) {
      if (item.track.preview_url == null) continue;
      artist.push(item.track.artists[0].name);
      foundSongs.push(item.track.preview_url);
      if (foundSongs.length >= 10) break;
    }
    setArtists(artist);
    setPlaylist(foundSongs);
  };

	const howler =
    playlist == null ? null : (
      <ReactHowler
        src={playlist[songIndex]}
        format={["mp3", "aac"]}
        onEnd={nextSong}
      />
    );
  
	var name1 = localStorage.getItem('name1'); 
  shuffle(artistsFaces);
 
  return (
    <div className="App">   
      <nav class="item">
        <h2 id="username"> {name1}</h2>
        <h2 id="subject"> SCORE: <DisplayScore ref={ref} /> </h2>
        <h2 id="end-btn"> <button onClick={() => setShowModal(true)} id="end">QUIT</button></h2>
      </nav>

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
              artists = {artists}
              artistIndex = {songIndex}
              nextSong = {nextSong}
            />
          </>
        ))}
      </div>
      {howler}

      <div
        className={showModal ? "modal show" : "modal"}
        onClick={() => setShowModal(false)} >
          
        <div id="modalContainer">
          <h1>Are you sure you want to quit?</h1>
          <button id="cancel"><a id='cancel' href= '#'> CANCEL </a></button>
				  <button id='end'> <a id='cancel' href='/gameOver'> QUIT </a></button>
        </div>
      </div>
    </div>
  );
};


export default GamePage;
