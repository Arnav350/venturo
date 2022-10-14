import React from "react";
import "../App.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-title">
        <figure className="nav-fig">
          <img src={Logo} alt="Logo" className="nav-logo" />
        </figure>
        <figure className="nav-fig">
          <img src="./assets/venturo.png" alt="" className="nav-name" />
        </figure>
      </Link>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/" className="nav-header">
            Start Learning
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/" className="nav-header">
            Volunteer
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/Donate" className="nav-header">
            Donate
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/About" className="nav-header">
            About
          </Link>
        </li>
      </ul>
      <Link to="/" className="nav-sign blue-button">
        Sign In
      </Link>
    </nav>
  );
}

export default Nav;
