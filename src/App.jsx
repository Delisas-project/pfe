import React from "react";
import "./App.css";
import BackOfficeInterface from "./template/backOfficeInterface";

import Login from "./organism/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BackOfficeInterface />
      {/* <Login /> */}
    </div>
  );
}

export default App;
