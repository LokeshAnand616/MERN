import './App.css';
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
import { lazy, Suspense } from 'react';
import ReduxInc from './components/ReduxInc';
const LazyTransition = lazy(()=>import("./components/Transition"));

function App() {
  return (
    <div className="App">
      <PropsClass/>
      <ParentProp/>
      <ThemeSwitcher/>
      <Events/>
      <FormData/>
      <InputElement/>
      <DisplayText/>
      <ComponentLifeCycle/>
      <FetchClass/>
      <StateInput/>
      <UseStateScenario/>
      <UseEffectScenario/>
      <Task/>
      <UseMemoScenario/>
      <ContextChild/>
      <Suspense fallback={<h1>loading</h1>}>
        <LazyTransition/>
      </Suspense>
      <ReduxInc/>
    </div>
  );
}

export default App;
