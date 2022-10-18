import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignIn() {
  const [type, setType] = useState("password");

  function showPass() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }

  return (
    <>
      <section>
        <div className="signin container">
          <h1 className="signin-title">Sign In</h1>
          <div className="signin-card">
            <Link className="signin-signup">Sign Up</Link>
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
            <Link className="signin-remember">
              Don't remember your password?
            </Link>
            <p className="signin-acc">
              Need an Account?
              <Link className="signin-signup"> Sign Up</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;