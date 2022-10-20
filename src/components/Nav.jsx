import React from "react";
import "../App.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Name from "../assets/venturo.png";

function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-title">
        <figure className="nav-logo">
          <img src={Logo} alt="Logo" className="nav-img" />
        </figure>
        <figure className="nav-name">
          <img src={Name} alt="Name" className="nav-img" />
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
      <Link to="/SignIn" className="nav-sign blue-button">
        Sign In
      </Link>
    </nav>
  );
}

export default Nav;
