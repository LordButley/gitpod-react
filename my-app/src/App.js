import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';


function App() {
  return (
    <div className="App">
      {/* <h1>It works</h1> */}
      <FunctionalGreeting />
      <FunctionalGreetingWithProps />
    </div>
  );
}

export default App;
