import React from 'react';
import './App.css';
import {Convo} from "./components/Convo/Convo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Chat App</h1>
      </header>

        <h2> chat app body</h2>
        <Convo/>

      <footer>
        <p> footer of app</p>
      </footer>
    </div>
  );
}

export default App;
