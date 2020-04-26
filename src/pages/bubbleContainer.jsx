import React, { useState, useEffect } from "react";

const Bubble = (props) => {
    const [clicked, setClicked] = useState(false);
   


    const checkAnswer = () => {
        setClicked(true);
        if (props.name === props.artists[props.artistIndex]) {
            props.wrapperSetScore(5);
            props.nextSong();
            //props.setIsCorrect(1);
             
        } else {
            props.wrapperSetScore(-2);
           // props.setIsCorrect(-1)
        }
  
        if (props.artistIndex === props.artists.length - 1) {
          window.location.href = "/gameOver";
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