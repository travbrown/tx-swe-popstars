//seperation of concern is used here
//this displays the bubbles with the images in them
//Adds 5 points if correct bubble is clicked 
//and subrtacts 2 if wrong bubble is clicked

import React, { useState } from "react";

const PlayerOneBubble = (props) => {
    const [clicked, setClicked] = useState(false);
    const checkAnswer = () => { //checks if the answer is right or wrong and sets it accordingly
        setClicked(true);
        if (props.name === props.playlist[props.songIndex].artist_name) {
            props.setScore(5);
            props.nextSong();             
        } else {
            props.setScore(-2);
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

  export default PlayerOneBubble;