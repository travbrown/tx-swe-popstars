//This page creates the component that serves as the Guest button
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function NameInput(){
    const history = useHistory();

    const handleClick = () => { //when clicked, go to the gameMode page
        history.push("/gameMode");
    }

 return( 
     <div>
     <textarea>Guest Name</textarea>
     <br></br>
     <button onClick={handleClick}>Play as Guest</button>
     </div>
       
    );
  
}
  export default NameInput; 