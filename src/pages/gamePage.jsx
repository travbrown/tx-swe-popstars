import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import SpotifyWebApi from "spotify-web-api-js";
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

const artistsFaces = [
  { name: "A$AP Ferg", image: asap_ferg },
  { name: "A$AP Rocky", image: asap_rocky },
  { name: "Cardi B", image: cardi_b },
  { name: "Drake", image: drake },
  { name: "Lil Wayne", image: lil_wayne },
  { name: "2Pac", image: tupac },
  { name: "Kanye West", image: kanye_west },
  { name: "J. Cole", image: jcole },
  { name: "Nicki Minaj", image: nicki_minaj },
  { name: "Beyoncé", image: beyonce }
];

function Bubble({ number, image, name, checkAnswer }) {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
    checkAnswer(name);
  };

  return (
    <div
      className={`bubble x${number}`}
      style={{ display: clicked ? "none" : "flex" }}
      onClick={onClick}
    >
      <img
        style={{
          display: "inline-block",
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
}

const GamePage = () => {
  const spotifyApi = new SpotifyWebApi();

  const [playlist, setPlaylist] = useState(null);
  const [artists, setArtists] = useState(null);

  const [songIndex, setSongIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  const checkAnswer = name => {
    if (name === artists[songIndex]) {
      setScore(score + 5);
      nextSong();
    }
  };

  const nextSong = () => {
    console.log("Setting index to ", songIndex + 1);
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

  return (
    <div className="App">
      <div className="item">Username</div>
      <div className="item">SCORE: {score}</div>

      <div id="background-wrap">
        {artistsFaces.map((item, idx) => (
          <Bubble
            checkAnswer={checkAnswer}
            key={idx}
            image={item.image}
            number={idx}
            name={item.name}
          />
        ))}
      </div>
      {howler}
      <button className="quit_button" onClick={() => setShowModal(true)}>
        {" "}
        QUIT{" "}
      </button>
      <div
        className={showModal ? "modal show" : "modal"}
        onClick={() => setShowModal(false)}
      >
        <div id="modalContainer">
          <h1>Are you sure you want to quit?</h1>
          <a className="quit" href="/gameMode">
            {" "}
            QUIT{" "}
          </a>
          <a className="cancel" href="#">
            {" "}
            CANCEL{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
