import React from 'react';
import logo from './logo.svg';
import './App.css';
//import startGamePage from './startGamePage.js'; 
import Button from '@material-ui/core/Button';


function App() {
  function startGamePage() { 
    return (
      <div className="App">
        <h2> Username </h2>
        <header className="App-header">
          <Button variant="contained" color="primary" > START GAME </Button>
          <p></p><p></p>
          <Button variant="contained" color="default" > Back </Button>
        </header>
      </div>
    );
  }
  return (
    <div className="App">
      <h2> Username </h2>
      <div className="App2">
        <h1> Difficulty </h1>
      </div>
      <header className="App-header">
        <Button style={{ fontSize: '30px' }} variant="contained" onClick={() => startGamePage()} color="primary"> Easy </Button>
        <p></p>
        <Button style={{ fontSize: '30px' }} variant="contained" color="primary" > Medium </Button>
        <p></p>
        <Button style={{ fontSize: '30px' }} variant="contained" color="primary" > Hard </Button>
        <p></p>
        <Button variant="contained" color="default" > Back </Button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
      </header>
    </div>
  );
}

export default App;
