import React from "react";
import "./App.css";
import { Convo } from "./components/Convo/Convo.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
      </header>
      <h2> Nivaaz has joined the chat.</h2>
        <Convo />
      <footer>
        <p> Built by Nivaaz S, 2022</p>
      </footer>
    </div>
  );
}

export default App;
