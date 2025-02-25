import './App.css';
import PropsClass from './components/PropsClass';
import ParentProp from './components/ParentProp';
import ThemeSwitcher from './components/LazyInitialization';
import Events from './components/Events';
import FormData from './components/FormData';
import InputElement from './components/InputElement';
import DisplayText from './components/DisplayText';

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
    </div>
  );
}

export default App;
