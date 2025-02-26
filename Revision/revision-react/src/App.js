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
    </div>
  );
}

export default App;
