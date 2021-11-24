//tool imports
import { Routes, Route } from "react-router";
import React from "react";
import "./App.css";
//component imports
import background from "./assets/images/background.jpg";
import Homepage from "./pages/Homepage";
import Charactersheet from "./pages/Charactersheet";
//function
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div>
        <h1>HI THERE FROM APP.JS</h1>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/sheet" element={<Charactersheet />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
