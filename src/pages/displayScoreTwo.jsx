import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const DisplayScoreTwo =
forwardRef((props, ref) => {
  const [scoreTwo, setScoreTwo] = useState(0);

  localStorage.setItem("scoreTwo", scoreTwo);

  const addToScoreTwo = (delta) => {
    setScoreTwo(scoreTwo + delta);
  }

  useImperativeHandle(ref, () => {
    return {
      addToScoreTwo: addToScoreTwo
    };
  });

  return (
    <span> {scoreTwo} </span> 
  );

});

export default DisplayScoreTwo;