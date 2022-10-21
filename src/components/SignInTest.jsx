import React, { useState, useEffect } from "react";
import "../App.css";
import "../pages/Main.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

function SignInTest() {
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

  function setSignIn() {
    document.querySelector("body").style.paddingRight = 0;

    document.querySelector(".signin-card").style.zIndex = -1;
    document.querySelector("main").style.filter = `blur(0px)`;
    document.querySelector("main").style.pointerEvents = "all";
    document.querySelector("body").style.overflow = "visible";
  }

  return (
    <>
      <div className="signin-card">
        <div className="signin-top">
          <h1 className="signin-title">Sign In</h1>
          <FaTimes className="signin-exit" onClick={() => setSignIn()} />
        </div>
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
        <Link className="signin-remember">Don't remember your password?</Link>
        <p className="signin-acc">
          Need an Account?
          <Link className="signin-signup"> Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default SignInTest;
