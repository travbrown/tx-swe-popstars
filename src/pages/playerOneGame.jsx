//Player one's game page- users click on bubbles as the music playes and scores update accordingly

import React, { useState, useEffect, useRef, useContext } from "react";
import ReactHowler from "react-howler";
import PlayerOneBubble from "./playerOneContainer.jsx";
import "./gamePage.css";
import { useHistory } from 'react-router-dom';

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

const PlayerOneGame = (props) => {
    const {difficulty,updateScore} = useContext(GameContext);    
    const history = useHistory();
    const playlist = props.location.state.playlist;
    const [bubbleLimit, setBubbleLimit] = useState(getBubbleLimit());
    const [limitOfSongsToPlay, setlimitOfSongsToPlay] = useState(setSongLimit());
    const [songIndex, setSongIndex] = useState(0);
    const [score, setScore] = useState(0);

   useEffect(()=>{
    localStorage.setItem('score', 0);
  },[]);

  const updateCurrentScore = delta => {
   setScore(score+delta);
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

  /*Kept breaking the app*/
  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * Math.floor(max));
  // }

  // const ensureCorrectArtistGetsBubbled = () => {
  //   for (let i = bubbleLimit; i < artistsFaces.length; i++) {
  //     if(artistsFaces[i].name === playlist[songIndex].artist_name){
  //       let num = getRandomInt(bubbleLimit);
  //       [artistsFaces[i], artistsFaces[num]] = [artistsFaces[num], artistsFaces[i]];
  //       break;
  //     }
  // }

  const nextSong = () => {
    shuffle(artistsFaces);
    if (songIndex === playlist.length - 1 || songIndex === limitOfSongsToPlay - 1) {
      updateScore(score);
      history.push("/timeUp1");
      
    }
    setSongIndex(songIndex + 1);
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
    //ensureCorrectArtistGetsBubbled();
  
  return (
    <div className="App">
      <nav class="item">
        <h2 id="username"> {name1}</h2>
        <h2 id="subject"> SCORE: {score} </h2>
      </nav>

      <div id="background-wrap">
      {artistsFaces.slice(0,bubbleLimit).map((item, idx) => (
            <PlayerOneBubble
              key={item.name}
              image={item.image}
              hasArtist
              number={idx}
              name={item.name}
              setScore = {updateCurrentScore}
              playlist = {playlist}
              songIndex = {songIndex}
              nextSong = {nextSong}
              difficulty={difficulty}
            />
        ))}
      </div>
      {howler}
    </div>
  );
};

export default PlayerOneGame;