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
import SignUp from "./SignUp";
import Forgot from "./Forgot";
import NotFound from "./NotFound";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/users/:id/:name?" element={<UserDetails />} />
          <Route path="/users/list?" element={<UserList />} />
          <Route path="user">
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/user/forgot" element={<Forgot />} />
          </Route>
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="departments" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </div>
  );
}

//vid-8

export default App;
