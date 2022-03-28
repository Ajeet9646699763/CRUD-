import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="navlink">
        <li>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </li>
      </ul>
      <NavLink to="/AddUser">
        <button className="btn btn-primary mr-10">Add users</button>
      </NavLink>
      
    </div>
  );
}

export default Navbar;
