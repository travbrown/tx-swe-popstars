import React from 'react';
import logo from './popstarslogo.png';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Link to game mode
        </p>
      </header>
    </div>
  );
}

export default App;
