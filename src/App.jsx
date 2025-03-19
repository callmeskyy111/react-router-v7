import React from "react";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
//import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="departments" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

//vid-7

export default App;
