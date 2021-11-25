//tool imports
import { Routes, Route } from "react-router";
import React from "react";
import "./App.css";
//component imports
import background from "./assets/images/background.jpg";
import Homepage from "./pages/Homepage";
import Charactersheet from "./pages/Charactersheet";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//function
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div>
        <h1>HI THERE FROM APP.JS</h1>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sheet" element={<Charactersheet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
