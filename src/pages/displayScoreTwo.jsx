import React, { useEffect} from "react";

const DisplayScoreTwo = ({scoreTwo}) => {
  useEffect(() =>{
    localStorage.setItem("scoreTwo", scoreTwo);
  },[scoreTwo]);
  
  return (
    <span> {scoreTwo} </span> 
  );
}
export default DisplayScoreTwo;