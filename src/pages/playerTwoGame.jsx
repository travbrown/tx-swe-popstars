import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactHowler from "react-howler";
import SpotifyWebApi from "spotify-web-api-js";
import DisplayScoreTwo from "./displayScoreTwo.jsx";
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

const PlayerTwoGame = () => {
    const spotifyApi = new SpotifyWebApi();

    const [playlist, setPlaylist] = useState(null);
    const [songIndex, setSongIndex] = useState(0);
    const [bubbleLimit, setBubbleLimit] = useState(getBubbleLimit());
    const [difficulty, setDifficulty] = useState(localStorage.getItem("difficulty"));
    const [limitOfSongsToPlay, setlimitOfSongsToPlay] = useState(setSongLimit());

    const ref = useRef(null);
    const wrapperSetScore = delta => {
        ref.current.addToScoreTwo(delta);
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
        window.location.href = "/timeUp2";
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
        shuffle(artistsFaces);
        if(difficulty !== 'hard'){
          ensureCorrectArtistGetsBubbled();
        };
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

  var name2 = localStorage.getItem('playerTwoName'); 
  var score2 = <DisplayScoreTwo ref={ref} />;

  return (
    <div className="App">
      <nav class="item">
        <h2 id="username"> {name2}</h2>
        <h2 id="subject"> SCORE: {score2} </h2>
      </nav>
      
      <div id="background-wrap">
      {artistsFaces.slice(0,bubbleLimit).map((item, idx)=> (
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
            />
          </>
        ))}
      </div>
      {howler}

    </div>
  );
};

//localStorage.setItem("Score2",DisplayScore);
export default PlayerTwoGame;