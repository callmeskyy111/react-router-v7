import React from "react";
import { Link, Outlet } from "react-router";
import "./header.css";

function Navbar() {
  return (
    <div>
      <div className="header">
        <div>
          <Link className="link" to="/" title="Home_Page">
            <h2>⚛️</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home🏠</Link>
            </li>
            <li>
              <Link to="/user/login">Login🔐</Link>
            </li>
            <li>
              <Link to="/about">About📄</Link>
            </li>
            <li>
              <Link to="/college">College🎓</Link>
            </li>
            <li>
              <Link to="/users">Users 👥</Link>
            </li>
            <li>
              <Link to="/users/list">List 📃</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
