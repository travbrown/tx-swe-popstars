import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const DisplayScore =
forwardRef((ref) => {
  const [score, setScore] = useState(0);

  localStorage.setItem("score", score);

  const addToScore = (delta) => {
    setScore(score + delta);
  }

  useImperativeHandle(ref, () => {
    return {
      addToScore: addToScore,
    };
  });

  return (
    <span> {score} </span> 
  );

});

export default DisplayScore;