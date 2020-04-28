// import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom';

// const PlayerOneBubble = (props) => {
//     const [clicked, setClicked] = useState(false);
//     const checkAnswer = () => {
//         setClicked(true);
//         if (props.name === props.artists[props.artistIndex]) {
//             props.wrapperSetScore(5);
//             props.nextSong();
//         } else {
//             props.wrapperSetScore(-2);
//         }
  
//         if (props.artistIndex === props.artists.length - 1) {
//           document.getElementById("nextPage").click();
//         }
//     };

//     return (
//       <div
//         class={`bubble x${props.number}`}
//         style={{ display: clicked ? "none" : "flex" }}
//         onClick={checkAnswer}
//       >
//         <img
//           style={{
//             display: props.hasArtist ? "inline-block" : "none",
//             height: "100%",
//             width: "100%",
//             objectFit: "cover",
//             borderRadius: "50%"
//           }}
//           alt="bubble pic"
//           src={props.image}
//         />
//           <Link to="/timeUp1">
//             <button id="nextPage" style={{ display: "none" }}></button>
//           </Link>
//       </div>
//     );
//   };

//   export default PlayerOneBubble;