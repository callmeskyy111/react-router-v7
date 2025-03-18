import React from "react";
import Home from "./Home";
import { Link, Route, Routes } from "react-router";
import About from "./About";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <h1>React Router 7 tutorial.</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
