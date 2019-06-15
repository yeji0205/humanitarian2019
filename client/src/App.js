import React from "react";
import "./App.css";
import PollutionMap from "./components/PollutionMap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      Backpacker's Guide Through Worldwide Textile Water Pollution
      <NavBar />
      <PollutionMap />
    </div>
  );
}

export default App;
