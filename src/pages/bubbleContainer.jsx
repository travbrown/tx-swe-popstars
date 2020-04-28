import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../gameContext";

const Bubble = (props) => {
    const [clicked, setClicked] = useState(false);
    const {updateScore} = useContext(GameContext);
   
    const checkAnswer = () => {
        setClicked(true);
        if (props.name === props.playlist[props.songIndex].artist_name) {
            props.addtoScore(5);
            props.nextSong();             
        } else {
            props.addtoScore(-2);
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
      </div>
    );
  };

export default Bubble;