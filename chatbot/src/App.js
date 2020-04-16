import React from 'react';
import './App.css';
import {Convo} from "./components/Convo/Convo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Chat App</h1>
      </header>
      <body>
        <h2> chat ah2p body</h2>
        <Convo/>
      </body>
      <footer>
        <p> footer of app</p>
      </footer>
    </div>
  );
}

export default App;
