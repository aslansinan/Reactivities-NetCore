import './App.css';
import {ducks} from './demo'
import DuckItem from './DuckItem'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {ducks.map(duck =>(
             <DuckItem duck={duck} key={duck.name}/>
          ))}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
