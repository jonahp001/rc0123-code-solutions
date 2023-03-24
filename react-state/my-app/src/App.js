import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ToggleButton color="blue" text="Hello There"/>
        <ToggleButton color="white" text="Bye bye"/>
        <ToggleButton color="lime" text="crazy"/>
      </header>
    </div>
  );
}

export default App;
