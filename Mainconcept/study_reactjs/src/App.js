import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
        <Link className="App-link" to="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Link>
        <Link className="App-link" to="/helloworld" rel="noopener noreferrer">
          Go to hello world page 1
        </Link>
        <Link className="App-link" to="/tuan-react-space">
          Go to Tuan's React
        </Link>
        <Link className="App-link" to="/khanh-react">
          Go to Khanh's React
        </Link>
        <hr />
        <Link className="App-link" to="/our-react-space">
          Go to Our React Space
        </Link>
      </header>
    </div>
  );
}

export default App;
