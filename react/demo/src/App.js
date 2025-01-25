import React, { forwardRef, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import Startpage from './components/Startpage.js';
import ErrorBoundary from './components/ErrorDemo.js';
import ReactFragmentExample from './components/ReactfragmentExample.js';
import ForwardRefExample from './components/Forwardref.js';


function App() {


  return (
    <>

      <Router>
        <ul>
          <li>
            <Link to='Startpage'>Startpage</Link>
          </li>
          <li>
            <Link to='/lifecycle'>Lifecycle</Link>
          </li>
          <li>
            <Link to='/Switch'>Switch</Link>
          </li>
          <li>
            <Link to='/Statable'>Statable</Link>
          </li>
          <li>
            <Link to='/RenderingList'>RenderingList</Link>
          </li>
          <li>
            <Link to='/Formpage'>Formpage</Link>
          </li>
          <li>
            <Link to='Parentcomponent'>ParentComponent</Link>
          </li>
          <li>
            <Link to='/Filtercomponent'>FilterComponent</Link>
          </li>
          <li>
            <Link to='/Tictactoe'>Tictactoe</Link>
          </li>
          <li>
            <Link to='/Useidform'>UseIdForm</Link>
          </li>
          <li>
            <Link to='/Suspense'>Suspense</Link>
          </li>
          <li>
            <Link to='/contextPage'>Page</Link>
          </li>
          <li>
            <Link to='/ErrorBoundaryPage'>Errorpage</Link>
          </li>
          <li>
            <Link to='/Reactfragment'>ReactFragment</Link>
          </li>
          <li>
            <Link to='/Forwardref'>Frowardref</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/Startpage' element={<Startpage />} />
          <Route path='/lifecycle' element={<Lifecycle />} />
          <Route path='/Switch' element={<SwitchComp />} />
          <Route path='/Statable' element={<Statable />} />
          <Route path='/Renderinglist' element={<RenderingList />} />
          <Route path='/Formpage' element={<FormPage />} />
          <Route path='/Parentcomponent' element={<ParentComponent />} />
          <Route path='/Filtercomponent' element={<FilterComponent />} />
          <Route path='/Tictactoe' element={<Tictac />} />
          <Route path='/Useidform' element={<UseIdForm />} />
          <Route path='/Suspense' element={<SuspenseReact />} />
          <Route path='/contextPage' element={<ContextRender />} />
          <Route path='/ErrorBoundaryPage' element={
            <ErrorBoundary fallback={<p>Error occured</p>}>
              <SuspenseReact/>
            </ErrorBoundary>
          }/>
          <Route path='/Reactfragment' element={<ReactFragmentExample/>}/>
          <Route path='/Forwardref' element={<ForwardRefExample/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
