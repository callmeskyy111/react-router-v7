import React from "react";
import { Link } from "react-router";
import "./header.css";

function Navbar() {
  return (
    <div className="header">
      <div>
        <Link className="link" to='/' title="Home_Page">
          <h2>⚛️</h2>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home🏠</Link>
          </li>
          <li>
            <Link to="/login">Login🔐</Link>
          </li>
          <li>
            <Link to="/about">About📄</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

