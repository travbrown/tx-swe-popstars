import React, { useState, useEffect } from 'react';
import * as $ from "jquery";
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import { render } from '@testing-library/react';
import logo from "../popstarslogo.png"

const NameOneInput = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/multiplayerPage");
    }
    const [name1, setName1] = useState('');
    localStorage.setItem('name1', name1)
    const handleName1 = event => setName1(event.target.value);
    localStorage.setItem('playerOneName', name1);
    const [name2, setName2] = useState('');
    localStorage.setItem('playerTwoName', name2)
    const handleName2 = event => setName2(event.target.value);
    
    return (
        <div>
            <nav class="item">
                <h2 id="subject-no-user-username">Enter Username</h2>
            </nav>
                <h2 id="inputNames">Player One: <PlayerOneName playeronename = {name1} /> </h2>  
                     <Input type="text" value={name1} onChange={handleName1} class="nameBox"></Input><br></br>
                <h2 id="inputNames">Player Two: <PlayerTwoName playertwoname = {name2} /></h2>
                    <Input type="text" value={name2} onChange={handleName2}></Input>
                 <center>
                    <button onClick={handleClick} id="next">NEXT</button>
                 </center>
            </div>
        );
    };

     const PlayerOneName = ({playeronename}) => <h2>{playeronename}</h2> ; 
     const PlayerTwoName = ({playertwoname}) => <h2>{playertwoname}</h2> ; 
     const Input = ({value, onChange, children}) => (
         <label>
             {children}
             <input type="text" value={value} onChange={onChange}/>
         </label>
     )
    


      export default NameOneInput;
      export {PlayerOneName};
      export {PlayerTwoName};
