import React from 'react';
import logo from './popstarslogo.png';
import './App.css';
import SinglePlayer from './singlePlayer';
import MultiPlayer from './multiPlayer';
function GameMode() {
return (
    <div className="GameMode">
      <header className="GM-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the Game Mode page.
          <SinglePlayer/>
          <br></br>
          <MultiPlayer/>
        </p>
      </header>
    </div>
  );
}

export default GameMode;