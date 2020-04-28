import React, { useState, useEffect, useRef, useContext } from "react";
import ReactHowler from "react-howler";
import SpotifyWebApi from "spotify-web-api-js";
import DisplayScore from "./displayScore.jsx";
import Bubble from "./bubbleContainer.jsx";
import "./gamePage.css";
import {GameContext} from './../gameContext';
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
import { Link, useHistory } from "react-router-dom";

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
    { name: "DaVido", image: davido },
    { name: "Justin Bieber", image: Justin_beiber },
    { name: "Lizzo", image: lizzo },
    { name: "Rihanna", image: rihanna },
    { name: "Wiz Khalifa", image: wiz_khalifa },
];

const GamePage = () => {
  const spotifyApi = new SpotifyWebApi();
  const {difficulty, access_token, playlist_code } = useContext(GameContext);
  const history = useHistory();

	const [playlist, setPlaylist] = useState(null);

  const [limitOfSongsToPlay, setlimitOfSongsToPlay] = useState(setSongLimit());
	const [songIndex, setSongIndex] = useState(0);
	const [artistIndex, setArtistIndex] = useState(0);

	const [soundHowl, setSoundHowl] = useState(null);
	const [showModal, setShowModal] = useState(false);

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
    if (songIndex === playlist.length - 1 || songIndex === limitOfSongsToPlay - 1) {
      history.push("/gameOver");
    }
    setSongIndex(songIndex + 1);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  function setSongLimit(){
    if(difficulty === 'medium'){
      return 10;
    } else if (difficulty === 'hard'){
      return 15;
    }
    return 7;
  };

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
      shuffle(foundSongs)
      setPlaylist(foundSongs);
      
    } catch (error) {
      alert('Our access to Spotify has expired.\nPress OK to login and refresh our access');
      history.push('/');
      console.log('Need to login again: ',error);
      return;
    }
  };

	const howler =
    playlist == null ? null : (
      <ReactHowler
        src={playlist[songIndex].prev_url}
        format={["mp3", "aac"]}
        onEnd={nextSong}
      />
    );
  
	let name1 = localStorage.getItem('name1'); 
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
              playlist = {playlist}
              songIndex = {songIndex}
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
				  <Link id='cancel' to='/gameOver'><button id='end'> QUIT </button></Link>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
