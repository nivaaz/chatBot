import React from "react";
import "./App.css";
import { Convo } from "./components/Convo/Convo.tsx";
import { FormStateProvider } from "./components/formStates";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
      </header>
      <h2> Nivaaz has joined the chat.</h2>
      <FormStateProvider>
        <Convo />
      </FormStateProvider>
      <footer>
        <p> Built by Nivaaz Sehmbhi, 2020</p>
      </footer>
    </div>
  );
}

export default App;
