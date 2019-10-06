import React from 'react';
import logo from './logo.svg';
import './App.css';
import panda from "./panda-bamboo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          First react app
        </p>
        <img src={panda} className="App-logo" alt="Panda" />
      </header>
    </div>
  );
}

export default App;
