import React, { useState } from "react";
import {Link} from 'react-router-dom';

const PlayerOneBubble = (props) => {
    const [clicked, setClicked] = useState(false);
    const checkAnswer = () => {
        setClicked(true);
        if (props.name === props.playlist[props.songIndex].artist_name) {
            props.setScore(5);
            props.nextSong();             
        } else {
            props.setScore(-2);
        }
  
        // if (props.artistIndex === props.artists.length - 1) {
        //   document.getElementById("nextPage").click();
        // }
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
      </div>
    );
  };

  export default PlayerOneBubble;