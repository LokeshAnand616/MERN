import React, { useState } from 'react';
import './App.css';
import Game from './components/game';
import Study from './components/study';
import Statable from './components/statable';
import Lifecycle from './components/lifeCycle';
import RenderingList from './components/rendering_list.js';
import FormPage from './components/forms';
import ParentComponent from './components/parentComponent';
import FilterComponent from './components/FilterComponent.js';

function App() {
  const [selectedView, setSelectedView] = useState('');

  // Handle the radio button change
  function handleChange(event) {
    setSelectedView(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>This demo</p>
      </header>
      <section>
        <h1>Images</h1>
        <img
          src='https://th.bing.com/th/id/OIP.NOH8bBZLrC_5WpwupOJNkwHaEX?w=287&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
          alt='nature'
        />
      </section>
      <div>
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
      </div>
      <div>
        <Statable/>
      </div>
      <div>
        <Lifecycle/>
      </div>
      <div>
        <RenderingList/>
      </div>
      <div>
        <FormPage/>
      </div>
      <div>
        <ParentComponent/>
      </div>
      <div>
        <FilterComponent/>
      </div>
    </div>
  );
}

export default App;
