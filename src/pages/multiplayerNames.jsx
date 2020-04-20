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
    const handleName1 = event => setName1(event.target.value);
    localStorage.setItem('playerOneName', name1);

    return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <header id="inputNames">
                <PlayerOneName playeronename = {name1} />
                <Input value={name1} onBlur={handleName1}></Input>
          <center><button onClick={handleClick} id="next">NEXT</button></center></header>
          <h2><PlayerOneName/></h2>
            </div>
        );
    };

     const PlayerOneName = ({playeronename}) => <h2>{playeronename}</h2> ; 
     const Input = ({value, onBlur, children}) => (
         <label>
             {children}
             <input type="text" value={value} onChange={onBlur}/>
         </label>
     )
    


      export default NameOneInput;
      export {PlayerOneName};
//    


   

//     }
//     const Name2 = () => {
//         return <NameTwoComp/>;
//     };

//     const NameTwoComp = () => {
//             const [name2, setName2] = useState(""); 

//             const handleName2 = event => setName2(event.target.value);
//         return (
//             {name2}
//             );
//     }
    
//  return( 
     
     
//     <div className="App">
        
//     <header id="inputNames">
//     <img src={logo} className="App-logo" alt="logo" />
//         <center><h2>Player One: {name1}</h2></center>
//             <center><input type="text" value={name1} name="name1" onBlur={setNameOne}></input></center>
//             <center><h2>Player Two: {name2}</h2></center>
//             <center><input type="text" value={name2} name="name2" onBlur={handleName2}></input></center>
//      <br></br>
    
//         <center><button onClick={handleClick} id="next">NEXT</button></center></header>
        
        
//         </div>
  
//     );



//export default NameOneInput; 

// }