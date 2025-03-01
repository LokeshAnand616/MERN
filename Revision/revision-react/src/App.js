import './App.css'; // Import the CSS file

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PropsClass from './components/PropsClass';
import ParentProp from './components/ParentProp';
import ThemeSwitcher from './components/LazyInitialization';
import Events from './components/Events';
import FormData from './components/FormData';
import InputElement from './components/InputElement';
import DisplayText from './components/DisplayText';
import ComponentLifeCycle from './components/componentLifeCycle';
import FetchClass from './components/FetchClass';
import StateInput from './components/StateInput';
import UseStateScenario from './components/useStateScenario';
import UseEffectScenario from './components/UseEffectSenario';
import Task from './components/Task';
import UseMemoScenario from './components/UseMemoScenario';
import ContextChild from './components/ContextChild';
import ReduxInc from './components/ReduxInc';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyComponent from './components/BugComponent';
import Profiler from './components/Profiler';
import ModalParent from './components/ModalParent';
import ForwardComp from './components/ForwardComp';
import CustomHook from './components/CustomHook';

// Lazy Loading
const LazyComponent = lazy(() => import("./components/LazyLoading"));

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav>
          <h2>React Router Navigation</h2>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/props-class">PropsClass</Link></li>
            <li><Link to="/parent-prop">ParentProp</Link></li>
            <li><Link to="/theme-switcher">ThemeSwitcher</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/form-data">FormData</Link></li>
            <li><Link to="/input-element">InputElement</Link></li>
            <li><Link to="/display-text">DisplayText</Link></li>
            <li><Link to="/component-lifecycle">ComponentLifeCycle</Link></li>
            <li><Link to="/fetch-class">FetchClass</Link></li>
            <li><Link to="/state-input">StateInput</Link></li>
            <li><Link to="/use-state-scenario">UseStateScenario</Link></li>
            <li><Link to="/use-effect-scenario">UseEffectScenario</Link></li>
            <li><Link to="/task">Task</Link></li>
            <li><Link to="/use-memo-scenario">UseMemoScenario</Link></li>
            <li><Link to="/context-child">ContextChild</Link></li>
            <li><Link to="/redux-inc">ReduxInc</Link></li>
            <li><Link to="/profiler">Profiler</Link></li>
            <li><Link to="/modal-parent">ModalParent</Link></li>
            <li><Link to="/forward-comp">ForwardComp</Link></li>
            <li><Link to="/custom-hook">CustomHook</Link></li>
            <li><Link to="/lazy">Lazy Loaded Component</Link></li>
            <li><Link to="/buggy">Buggy Component (Error Boundary)</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h1>Welcome to the React Router Example</h1>} />
          <Route path="/props-class" element={<PropsClass />} />
          <Route path="/parent-prop" element={<ParentProp />} />
          <Route path="/theme-switcher" element={<ThemeSwitcher />} />
          <Route path="/events" element={<Events />} />
          <Route path="/form-data" element={<FormData />} />
          <Route path="/input-element" element={<InputElement />} />
          <Route path="/display-text" element={<DisplayText />} />
          <Route path="/component-lifecycle" element={<ComponentLifeCycle />} />
          <Route path="/fetch-class" element={<FetchClass />} />
          <Route path="/state-input" element={<StateInput />} />
          <Route path="/use-state-scenario" element={<UseStateScenario />} />
          <Route path="/use-effect-scenario" element={<UseEffectScenario />} />
          <Route path="/task" element={<Task />} />
          <Route path="/use-memo-scenario" element={<UseMemoScenario />} />
          <Route path="/context-child" element={<ContextChild />} />
          <Route path="/redux-inc" element={<ReduxInc />} />
          <Route path="/profiler" element={<Profiler />} />
          <Route path="/modal-parent" element={<ModalParent />} />
          <Route path="/forward-comp" element={<ForwardComp />} />
          <Route path="/custom-hook" element={<CustomHook />} />

          {/* Lazy Loaded Route */}
          <Route path="/lazy" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <LazyComponent />
            </Suspense>
          }/>

          {/* Error Boundary Example */}
          <Route path="/buggy" element={
            <ErrorBoundary>
              <BuggyComponent />
            </ErrorBoundary>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
