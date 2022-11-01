import React from "react";
import "../App.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Name from "../assets/venturo.png";
import { openSign } from "../components/Utils.js";

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
          <a className="nav-header" onClick={() => openSign("up")}>
            Start Learning
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-header" onClick={() => openSign("up")}>
            Volunteer
          </a>
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
      <button className="nav-sign blue-button" onClick={() => openSign("in")}>
        Sign In
      </button>
    </nav>
  );
}

export default Nav;
