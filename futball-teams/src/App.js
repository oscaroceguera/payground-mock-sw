import React from "react";

import "./App.css";

// Start Mock Server in DEV
if (process.env.NODE_ENV === "development") {
  const { server } = require("./mocks/workerSetup");
  server.start();
}

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
    </div>
  );
}

export default App;
