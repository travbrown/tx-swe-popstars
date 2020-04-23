import React from 'react';  
import correct from '../photos/check-mark.png';
import incorrect from '../photos/cross.png'; 
import ReactDOM from 'react-dom';

function CorrectImg(){
    return <div img src={correct} alt="check"/>
}
function IncorrectImg(){
    return <div img src={incorrect} alt="cross"/>
}

function ImageDisplay(){
  
    
    return <div><CorrectImg /> <IncorrectImg/></div>;
  

}

  
export default ImageDisplay;
