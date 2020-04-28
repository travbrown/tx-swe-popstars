import React, { useState, useEffect } from "react";

const Bubble = (props) => {
    const [clicked, setClicked] = useState(false);
   
    const checkAnswer = () => {
        setClicked(true);
        if (props.name === props.playlist[props.songIndex].artist_name) {
            props.wrapperSetScore(5);
            props.nextSong();             
        } else {
            props.wrapperSetScore(-2);
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