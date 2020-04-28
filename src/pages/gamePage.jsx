import React, { useState, useEffect, useRef } from "react";
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
import megan_thee_stallion from "../photos/megan_thee_stallion.jpg";
import michael_jackson from "../photos/michael_jackson.jpg";
import skepta from "../photos/skepta.jpg";
import post_malone from "../photos/post_malone.png";
import XXXTentacion from "../photos/XXXTentacion.png";
import burnaboy from "../photos/burnaboy.jpg";
import chris_brown from "../photos/chris_brown.jpg";
import vybz_kartel from "../photos/vybz_kartel.jpg";
import selena_gomez from "../photos/selena_gomez.png";
import eminem from "../photos/eminem.png";

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
    { name: "Megan Thee Stallion", image: megan_thee_stallion },
    { name: "Michael Jackson", image: michael_jackson },
    { name: "Skepta", image: skepta },
    { name: "Post Malone", image: post_malone },
    { name: "XXXTENTACION", image: XXXTentacion },
    { name: "Burna Boy", image: burnaboy },
    { name: "Chris Brown", image: chris_brown },
    { name: "Vybz Kartel", image: vybz_kartel },
    { name: "Selena Gomez", image: selena_gomez },
    { name: "Eminem", image: eminem },
];

const GamePage = () => {
	const spotifyApi = new SpotifyWebApi();

	const [playlist, setPlaylist] = useState(null);
  const [difficulty, setDifficulty] = useState(localStorage.getItem("difficulty"));
	const [songIndex, setSongIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);


  const ref = useRef(null);
  const wrapperSetScore = delta => {
      ref.current.addToScore(delta);
   };

   function getBubbleLimit(){
    if(difficulty === 'medium'){
      return 20;
    } else if (difficulty === 'hard'){
      return 25;
    }
    return 15;
  };

  function setSongLimit(){
    if(difficulty === 'medium'){
      return 10;
    } else if (difficulty === 'hard'){
      return 15;
    }
    return 7;
  };

  const [bubbleLimit, setBubbleLimit] = useState(getBubbleLimit());
  const [limitOfSongsToPlay, setlimitOfSongsToPlay] = useState(setSongLimit());

  const shuffle = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const ensureCorrectArtistGetsBubbled = () => {
    for (let i = bubbleLimit; i < artistsFaces.length; i++) {
      if(artistsFaces[i].name === playlist[songIndex].artist_name){
        console.log(artistsFaces)
        console.log(playlist)
        let num = getRandomInt(bubbleLimit);
        [artistsFaces[i], artistsFaces[num]] = [artistsFaces[num], artistsFaces[i]];
        break;
      }
    }
  }

	const nextSong = () => {
    shuffle(artistsFaces);
    if (songIndex === playlist.length - 1 || songIndex === limitOfSongsToPlay - 1) {
      window.location.href = "/gameOver";
    }
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
      ensureCorrectArtistGetsBubbled();
    } catch (error) {
      console.log('Need to login again',error);
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
  
	var name1 = localStorage.getItem('name1'); 
  shuffle(artistsFaces);
  if(difficulty !== 'hard'){
    ensureCorrectArtistGetsBubbled();
  };
  

 
  // if(difficulty !== 'hard'){
  //   ensureCorrectArtistGetsBubbled();
  // };
  

 
  return (
    <div className="App">   
      <nav class="item">
        <h2 id="username"> {name1} </h2>
        <h2 id="subject"> SCORE: <DisplayScore ref={ref} /> </h2>
        <h2 id="end-btn"> <button onClick={() => setShowModal(true)} id="end">QUIT</button></h2>
      </nav>

      <div id="background-wrap">
        {artistsFaces.slice(0,bubbleLimit).map((item, idx) => (
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
              difficulty={difficulty}
            />;
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