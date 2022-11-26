import React, { useContext } from "react";
import "../App.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Name from "../assets/venturo.png";
import { auth } from "./init.js";
import { openSign } from "../components/Utils.js";
import { Context } from "../App.jsx";
import { signOut } from "firebase/auth";

function Nav() {
  const { user, setUser } = useContext(Context);
  const { userEmail, setEmail } = useContext(Context);
  const { userPass, setPass } = useContext(Context);

  function logout(event) {
    event.preventDefault();
    signOut(auth);
    setUser({});
    setEmail("");
    setPass("");
  }

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
          <button className="nav-header" onClick={() => openSign("up")}>
            Start Learning
          </button>
        </li>
        <li className="nav-li">
          <button className="nav-header" onClick={() => openSign("up")}>
            Volunteer
          </button>
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
      {Object.keys(user) == 0 ? (
        <button
          className="nav-signin blue-button"
          onClick={() => openSign("in")}
        >
          Sign In
        </button>
      ) : (
        <button className="nav-signout blue-button" onClick={logout}>
          {user.email.toUpperCase()[0]}
        </button>
      )}
    </nav>
  );
}

export default Nav;
