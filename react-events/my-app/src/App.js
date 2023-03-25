import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(text)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton onCustomClick={handleCustomClick} text="rando" color="cyan"/>
          <CustomButton onCustomClick={handleCustomClick} text="steering" color="indigo" />
          <CustomButton onCustomClick={handleCustomClick}text="muscles" color="red" />
        </div>
      </header>
    </div>
  );
}

export default App;
