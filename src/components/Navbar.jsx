import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap";

function Navbar() {
  return (
    <div className="navbar">
      {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
      <ul className="me-auto">
        <li>
          <NavLink to="/"> <h4 className="navlink">Home</h4></NavLink>
        </li>
        <li>
          
          <NavLink to="/about"><h4 className="navlink">About</h4></NavLink>
        </li>
        <li>
        
          <NavLink to="/contact"><h4 className="navlink">Contact</h4></NavLink>
        </li>
      </ul>
     <NavLink to="/AddUser">  <button>Add users</button></NavLink>
    </div>
  );
}

export default Navbar;
