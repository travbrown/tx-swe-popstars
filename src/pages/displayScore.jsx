import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useEffect } from "react";

// const DisplayScore = ({ref}) => {
//   const [score, setScore] = useState(0);

//   localStorage.setItem("score", score);

//   const addToScore = (delta) => {
//     setScore(score + delta);
//   };

//   useImperativeHandle(ref, () => {
//     return {
//       addToScore: addToScore,
//     };
//   });
//   console.log(ref);
//   return (
//     <span> {score} </span> 
//   );

// };
const DisplayScore = ({score}) => {
  useEffect(() =>{
    localStorage.setItem("score", score);
  },[score]);
  
  return (
    <span> {score} </span> 
  );
}
export default DisplayScore;