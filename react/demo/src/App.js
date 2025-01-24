import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';

import Statable from './components/statable';
import Lifecycle from './components/lifeCycle';
import RenderingList from './components/rendering_list.js';
import FormPage from './components/forms';
import ParentComponent from './components/parentComponent';
import FilterComponent from './components/FilterComponent.js';
import Tictac from './components/Tictac.js';
import UseIdForm from './components/useIdForm.js';
import SwitchComp from './components/SwitchComp.js';
import ContextRender from './components/ContextRender.js';
import SuspenseReact from './components/SuspenseReact.js';


function App() {
  

  return (
    <>
    
    <Router>
      <Link to='/lifecycle'>Lifecycle</Link>
      <Link to='/Switch'>Switch</Link>
      <Link to='/Statable'>Statable</Link>
      <Link to='/RenderingList'>RenderingList</Link>
      <Link to='/Formpage'>Formpage</Link>
      <Link to='Parentcomponent'>ParentComponent</Link>
      <Link to='/Filtercomponent'>FilterComponent</Link>
      <Link to='/Tictactoe'>Tictactoe</Link>
      <Link to='/Useidform'>UseIdForm</Link>
      <Link to='/Suspense'>Suspense</Link>
      <Link to='/contextPage'>Page</Link>
      <Routes>
        <Route path='/lifecycle' element={<Lifecycle />}/>
        <Route path='/Switch' element={<SwitchComp/>}/>
        <Route path='/Statable' element={<Statable/>}/>
        <Route path='/Renderinglist' element={<RenderingList/>}/>
        <Route path='/Formpage' element={<FormPage/>}/>
        <Route path='/Parentcomponent' element={<ParentComponent/>}/>
        <Route path='/Filtercomponent' element={<FilterComponent/>}/>
        <Route path='/Tictactoe' element={<Tictac/>}/>
        <Route path='/Useidform' element={<UseIdForm/>}/>
        <Route path='/Suspense' element={<SuspenseReact/>}/>
        <Route path='/contextPage' element={<ContextRender/>}/>
      </Routes>
    </Router>
    
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

      
      </div>

   
    </>
  );
}

export default App;
