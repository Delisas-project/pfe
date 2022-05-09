import React from "react";
import "./App.css";
import BackOfficeInterface from "./template/backOfficeInterface";

import Login from "./organism/login";

function App() {
  return (
    <div className="app">
      <BackOfficeInterface />
      {/* <Login /> */}
    </div>
  );
}

export default App;
