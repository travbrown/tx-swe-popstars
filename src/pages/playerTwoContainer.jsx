import React, { useState } from "react";
import {Link} from 'react-router-dom';

const PlayerTwoBubble = (props) => {
    const [clicked, setClicked] = useState(false);
    const checkAnswer = () => {
        setClicked(true);
        if (props.name === props.playlist[props.songIndex].artist_name) {
            props.setScoreTwo(5);
            props.nextSong();             
        } else {
            props.setScoreTwo(-2);
        }
    };

    return (
      <div
        class={`bubble x${props.number}`}
        style={{ display: clicked ? "none" : "flex" }}
        onClick={checkAnswer}
      >
        <img
          style={{
            display: props.hasArtist ? "inline-block" : "none",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "50%"
          }}
          alt="bubble pic"
          src={props.image}
        />
        <Link to="/timeUp2">
          <button id="nextPage" style={{ display: "none" }}></button>
        </Link>
      </div>
    );
  };

  export default PlayerTwoBubble;