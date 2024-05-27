import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>
          Goodbye Everyone
        
        </h1>
        
      </header>
    </div>
  );
}

export default App;
import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <WeatherSearch />
    </div>
  );
}