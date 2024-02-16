import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="left-nav">Fitness Tracker</div>
      <div className="right-nav">
        <nav className="links-container">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/exercise" className="links">
            Exercise
          </Link>
          <Link to="/food" className="links">
            Food
          </Link>
          <Link to="/goal" className="links">
            Goal
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
