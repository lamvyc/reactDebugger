import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    debugger;
    setCount(count+1);
    console.log('App is mounted')
  })
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {count}
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
