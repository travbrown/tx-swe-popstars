import React from 'react';
import logo from './popstarslogo.png';
import './App.css';
function GameMode() {
return (
    <div className="GameMode">
      <header className="GM-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the Game Mode page.
        </p>
      </header>
    </div>
  );
}

export default GameMode;