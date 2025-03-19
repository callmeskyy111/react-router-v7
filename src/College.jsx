import React from "react";
import { NavLink, Outlet } from "react-router";

function College() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h2>College_Page 🎓</h2>
      <NavLink className="link" to="student">
        Student
      </NavLink>
      <NavLink className="link" to="departments">
        Departments
      </NavLink>
      <NavLink className="link" to="details">
        College Details
      </NavLink>
      <Outlet/>
    </div>
  );
}

export default College;
