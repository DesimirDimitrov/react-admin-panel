import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Routing from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/sign-in">Sign in</Link>
      </header>
      <Routing />
    </div>
  );
}

export default App;
