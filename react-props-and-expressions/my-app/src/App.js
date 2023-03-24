import logo from './logo.svg';
import './App.css';
import './CustomButton.css';

function CustomButton({text}) {
  return (
    <button className="button">{text}</button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton text='I'/>
          <CustomButton text='know'/>
          <CustomButton text='React!'/>
        </div>
      </header>
    </div>
  );
}

export default App;
