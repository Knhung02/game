import React, { useState } from 'react';
import Character from './Character';
import './App.css';

const App = () => {
  const [A, setA] = useState(1);
  const [B, setB] = useState(1);

  const getStatus = () => {
    if (A > B) {
      return "A is winning";
    } else if (A < B) {
      return "B is winning";
    } else {
      return "Same point";
    }
  };

  const handleRace = () => {
    const random = Math.random();
    if (random < 0.5) {
      setA(A + 1);
    } else {
      setB(B + 1);
    }
  };

  const handleReset = () => {
    setA(1);
    setB(1);
  };

  return (
    <div className="App">
      <h1>{getStatus()}</h1>
      <Character name="Character A" characters={A} />
      <Character name="Character B" characters={B} />
      <br />
      <button onClick={handleRace}>Race</button>
      {(A > 1 || B > 1) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};

export default App;
