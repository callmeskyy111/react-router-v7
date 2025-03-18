import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>React Router 7 tutorial.</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

//vid-5

export default App;
