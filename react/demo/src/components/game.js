import React from 'react';

function Game({ name, level }) {
  return (
    <div>
      <h2>Game: {name}</h2>
      <p>Level: {level}</p>
    </div>
  );
}

export default Game;
