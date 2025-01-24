import React from "react"
import { useState } from "react";
import Game from './game';
import Study from './study';
function SwitchComp(){
    const [selectedView, setSelectedView] = useState('');

  // Handle the radio button change
  function handleChange(event) {
    setSelectedView(event.target.value);
  }
    return(
        <>
        <span>Game</span>
        <input
          type='radio'
          name='view'
          className='select'
          value='game'
          onChange={handleChange}
        />
        <span>Study</span>
        <input
          type='radio'
          name='view'
          className='select'
          value='study'
          onChange={handleChange}
        />
        <div>
          {selectedView === 'game' ? (
            <Game name="Super Mario" level="1" />
          ) : selectedView === 'study' ? (
            <Study subject="Math" difficulty="Easy" />
          ) : null}
        </div>
        </>
    );
}

export default SwitchComp;