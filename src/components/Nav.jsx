import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Name from "../assets/venturo.png";
import { auth } from "./init.js";
import { openSign } from "./Utils.js";
import { Context } from "../App.jsx";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Nav() {
  const [loading, setLoading] = useState(true);
  const [burger, setBurger] = useState(true);
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setLoading(false);
    });
  }, []);

  function dropdown() {
    const drop = document.querySelector(".nav__info__dropdown").style;
    console.log("hello");
    if (drop.opacity === "0") {
      drop.opacity = 1;
    } else {
      drop.opacity = 0;
    }
  }

  function logout(event) {
    event.preventDefault();
    signOut(auth);
    setUser({});
  }

  function menu() {
    const navLines = document.querySelector(".burger__box");
    if (burger) {
      setBurger(false);
      navLines.classList.add("open");
    } else {
      setBurger(true);
      navLines.classList.remove("open");
    }
  }

  return (
    <nav className="nav-bar">
      <Link to="/Home" className="nav__title">
        <figure className="nav__title--logo">
          <img src={Logo} alt="Logo" />
        </figure>
        <figure className="nav__title--name">
          <img src={Name} alt="Venturo" />
        </figure>
      </Link>
      <ul className="nav__links">
        <li>
          <button className="nav__links--link" onClick={() => openSign("up")}>
            Start Learning
          </button>
        </li>
        <li>
          <button className="nav__links--link" onClick={() => openSign("up")}>
            Volunteer
          </button>
        </li>
        <li>
          <Link to="/Donate" className="nav__links--link">
            Donate
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav__links--link">
            About
          </Link>
        </li>
      </ul>
      {loading ? (
        <Skeleton height={64} width={100} />
      ) : Object.keys(user).length === 0 ? (
        <button
          className="nav__signin blue-button"
          onClick={() => openSign("in")}
        >
          Sign In
        </button>
      ) : (
        <div className="nav__info">
          <button
            className="nav__info__profile-picture blue-button"
            onClick={dropdown}
          >
            {user.email.toUpperCase()[0]}
          </button>
          <div className="nav__info__dropdown">
            <div className="nav__info__personal">
              <div className="nav__personal--profile-picture">
                {user.email.toUpperCase()[0]}
              </div>
              <div className="nav__personal--name">FIRST NAME LAST NAME</div>
            </div>
            <div className="nav__info__email">{user.email}</div>
            <Link to="/Account" className="nav__info__manage">
              Manage Account
            </Link>
            <button className="nav__info__signout blue-button" onClick={logout}>
              Sign Out
            </button>
          </div>
        </div>
      )}
      <button className="nav__burger__box" onClick={menu}>
        <div className="nav__burger"></div>
      </button>
      <div className="nav__burger__menu">
        <Link to="/Donate" className="nav__menu--donate">
          Donate
        </Link>
        <Link to="/About" className="nav__menu--about">
          About
        </Link>
        <button className="nav__menu--signin" onClick={() => openSign("in")}>
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Nav;
