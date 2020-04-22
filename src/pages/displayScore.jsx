import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const DisplayScore =
forwardRef((props, ref) => {
  const [score, setScore] = useState(0);
  localStorage.setItem("score", score);

  const addToScore = (delta) => {
    setScore(score + delta);
  }

  console.log(score);
  useImperativeHandle(ref, () => {
    return {
      addToScore: addToScore
    };
  });
    return (
      <span>
        {score}
      </span>
    );
});

export default DisplayScore;