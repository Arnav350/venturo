import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Name from "../assets/venturo.png";
import { auth } from "./init.js";
import { openSign } from "../components/Utils.js";
import { Context } from "../App.jsx";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Nav() {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setLoading(false);
    });
  }, []);

  function dropdown() {
    const drop = document.querySelector(".nav-dropdown").style;
    drop.opacity = 1;
    // console.log("hello");
  }

  function logout(event) {
    event.preventDefault();
    signOut(auth);
    setUser({});
  }

  function consoleUser() {
    console.log(user);
  }

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-title">
        <figure className="nav-logo">
          <img src={Logo} alt="Logo" className="nav-img" />
        </figure>
        <figure className="nav-venturo">
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
      {loading ? (
        <Skeleton height={64} width={100} />
      ) : Object.keys(user).length === 0 ? (
        <button
          className="nav-signin blue-button"
          onClick={() => openSign("in")}
        >
          Sign In
        </button>
      ) : (
        <div className="nav-info">
          <button className="nav-profile blue-button" onClick={dropdown}>
            {user.email.toUpperCase()[0]}
          </button>
          <div className="nav-dropdown">
            <div className="nav-personal">
              <div className="nav-pfp">{user.email.toUpperCase()[0]}</div>
              <div className="nav-name">FIRST LAST</div>
            </div>
            <div className="nav-email">{user.email}</div>
            <div className="nav-manage">Manage Account</div>
            <button className="nav-signout blue-button" onClick={logout}>
              Sign Out
            </button>
          </div>
        </div>
      )}
      {/* <button onClick={consoleUser}>USER</button> */}
    </nav>
  );
}

export default Nav;
