import React, { useState } from "react";
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
            <label className="signin-label">Email</label>
            <input type="email" className="signin-email" />
            <label className="signin-label">Password</label>
            <input type={type} className="signin-password" />
            {type === "password" ? (
              <FaEye onClick={() => showPass()} />
            ) : (
              <FaEyeSlash onClick={() => showPass()} />
            )}
            <Link>Sign In</Link>
            <Link>Don't remember your password?</Link>
            <p>
              Need an Account?
              <Link> Sign Up</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
