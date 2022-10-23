import React, { useState, useEffect } from "react";
import "../App.css";
import "./Sign.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { closeSign } from "./Utils.js";

function Sign() {
  const [type, setType] = useState("password");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function showPass() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }

  function signUpSubmit() {
    const pw = document.querySelector(".signup-password").value;
    const check = document.querySelector(".signup-check");
    if (pw.length < 6) {
      check.innerHTML = "Password must be atleast 6 characters";
    } else if (pw.length > 15) {
      check.innerHTML = "Password must be at most 15 characters";
    } else {
      check.innerHTML = "yay";
    }
  }

  return (
    <>
      <div className="signin-card">
        <div className="signin-top">
          <h1 className="signin-title">Sign In</h1>
          <FaTimes className="signin-exit" onClick={() => closeSign("in")} />
        </div>
        <form className="signin-form">
          <label className="signin-label">Email</label>
          <input type="email" className="signin-email" />
          <label className="signin-label">Password</label>
          <div className="signin-pass">
            <input type={type} className="signin-password" />
            {type === "password" ? (
              <FaEye className="signin-eye" onClick={() => showPass()} />
            ) : (
              <FaEyeSlash className="signin-eye" onClick={() => showPass()} />
            )}
          </div>
          <Link className="signin-button blue-button">Sign In</Link>
        </form>
        <Link className="signin-remember blue-text">
          Don't remember your password?
        </Link>
        <p className="signin-acc">
          Need an Account?
          <Link className="signin-signup blue-text"> Sign Up</Link>
        </p>
      </div>

      <div className="signup-card">
        <div className="signup-top">
          <h1 className="signup-title">Sign Up</h1>
          <FaTimes className="signup-exit" onClick={() => closeSign("up")} />
        </div>
        <form className="signup-form">
          <label className="signup-label">Email</label>
          <input type="email" className="signup-email" />
          <label className="signup-label">Password</label>
          <div className="signup-pass">
            <input type={type} className="signup-password" />
            {type === "password" ? (
              <FaEye className="signup-eye" onClick={() => showPass()} />
            ) : (
              <FaEyeSlash className="signup-eye" onClick={() => showPass()} />
            )}
          </div>
          <p className="signup-check">Way</p>
          <label className="signup-label">Confirm Password</label>
          <input type={type} className="signup-password" />
          <Link
            className="signup-button blue-button"
            onClick={() => signUpSubmit()}
          >
            Sign Up
          </Link>
        </form>
        <p className="signup-acc">
          Already have an account?
          <Link className="signup-signup blue-text"> Sign In</Link>
        </p>
      </div>
    </>
  );
}

export default Sign;
