import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropsAreReadOnly from "./oursWorking/PropsAreReadOnly";

const HelloWorld = lazy(() => import("./"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link" href="/helloworld" rel="noopener noreferrer">
          Go to hello world page 1
        </a>
        <a className="App-link" href="/tuan-react-space">
          Go to Tuan's React
        </a>
        <a className="App-link" href="/khanh-react">
          Go to Khanh's React
        </a>
        <hr />
        <a className="App-link" href="/our-react-space">
          Go to Our React Space
        </a>
      </header>
    </div>
  );
}

export default App;
