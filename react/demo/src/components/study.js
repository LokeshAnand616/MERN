import React from 'react';

function Study({ subject, difficulty }) {
  return (
    <div>
      <h2>Study Subject: {subject}</h2>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
}

export default Study;
