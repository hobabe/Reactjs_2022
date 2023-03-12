import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { HashRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


/*We will import under this comment*/
import TuanReactSpace from "./tuan/TuanReactSpace";
import OurReactSpace from "./oursWorking/OurReactSpace";
import KhanhReact from "./khanh/KhanhReact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/helloworld" element={<div>Hello world!</div>} />
        <Route path="/tuan-react-space" element={<TuanReactSpace value="'hello'" />} />
        <Route path="/khanh-react" element={<KhanhReact value='hello' />} />
        <Route path="/our-react-space" element={<OurReactSpace value="'hello'" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
