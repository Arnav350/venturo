import React, { useState, useEffect } from "react";
import "../App.css";
import "./Sign.css";
import { Link } from "react-router-dom";
import { auth } from "./init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { openSign, closeSign } from "./Utils.js";

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

  function signUpPassword() {
    const pw = document.querySelector(".signup-password").value;
    const pwc = document.querySelector(".signup-confirm").value;
    const check = document.querySelector(".signup-check");
    if (pw.length < 6) {
      check.innerHTML = "Password must be atleast 6 characters";
    } else if (pw.length > 15) {
      check.innerHTML = "Password must be at most 15 characters";
    } else if (pw !== pwc && pwc !== "") {
      check.innerHTML = "Passwords do not match";
    } else {
      check.innerHTML = "";
    }
  }

  function signUpConfirm() {
    const pw = document.querySelector(".signup-password").value;
    const pwc = document.querySelector(".signup-confirm").value;
    const check = document.querySelector(".signup-check");
    if (pw !== pwc) {
      check.innerHTML = "Passwords do not match";
    } else if (pw.length < 6) {
      check.innerHTML = "Password must be atleast 6 characters";
    } else if (pw.length > 15) {
      check.innerHTML = "Password must be at most 15 characters";
    } else {
      check.innerHTML = "";
    }
  }

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");

  function signUpButton() {
    const button = document.querySelector(".signup-button");
    const email = document.querySelector(".signup-email").value;
    const pw = document.querySelector(".signup-password").value;
    const pwc = document.querySelector(".signup-confirm").value;
    button.className = "signup-button gray-button";
    button.disabled = true;
    if (email !== "") {
      if (pw.length >= 6 && pw.length <= 15) {
        if (pw === pwc) {
          button.className = "signup-button blue-button";
          button.disabled = false;
          setEmail(document.querySelector(".signup-email").value);
          setPass(document.querySelector(".signup-password").value);
        }
      }
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  // function register(event) {
  //   createUserWithEmailAndPassword(auth, userEmail, userPass)
  //     .then((user) => {
  //       console.log(user);
  //       event.preventDefault();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       event.preventDefault();
  //     });
  // }

  function register(event) {
    alert("hello!");
    event.preventDefault();
  }

  function login() {
    signInWithEmailAndPassword(auth, userEmail, userPass)
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <>
      <div className="signin-card">
        <div className="signin-top">
          <h1 className="signin-title">Sign In</h1>
          <FaTimes className="signin-exit" onClick={() => closeSign("in")} />
        </div>
        <form className="signin-form" onSubmit={() => login()}>
          <label className="signin-label">Email</label>
          <input type="email" className="signin-email" required="required" />
          <label className="signin-label">Password</label>
          <div className="signin-pass">
            <input
              type={type}
              className="signin-password"
              required="required"
            />
            {type === "password" ? (
              <FaEye className="signin-eye" onClick={() => showPass()} />
            ) : (
              <FaEyeSlash className="signin-eye" onClick={() => showPass()} />
            )}
          </div>
          <p className="signin-check"></p>
          <input
            type="submit"
            value="Sign In"
            className="signin-button blue-button"
          />
        </form>
        <Link className="signin-remember blue-text">
          Don't remember your password?
        </Link>
        <p className="signin-acc">
          Need an Account?{" "}
          <Link
            className="signin-signup blue-text"
            onClick={() => {
              openSign("up");
              closeSign("in");
            }}
          >
            Sign Up
          </Link>
        </p>
      </div>

      <div className="signup-card">
        <div className="signup-top">
          <h1 className="signup-title">Sign Up</h1>
          <FaTimes className="signup-exit" onClick={() => closeSign("up")} />
        </div>
        <form className="signup-form" onSubmit={register}>
          <label className="signup-label">Email</label>
          <input
            type="email"
            className="signup-email"
            required="required"
            onChange={() => signUpButton()}
          />
          <label className="signup-label">Password</label>
          <div className="signup-pass">
            <input
              type={type}
              className="signup-password"
              required="required"
              onBlur={() => signUpPassword()}
              onChange={() => signUpButton()}
            />
            {type === "password" ? (
              <FaEye className="signup-eye" onClick={() => showPass()} />
            ) : (
              <FaEyeSlash className="signup-eye" onClick={() => showPass()} />
            )}
          </div>
          <label className="signup-label">Confirm Password</label>
          <input
            type={type}
            className="signup-confirm"
            required="required"
            onBlur={() => signUpConfirm()}
            onChange={() => signUpButton()}
          />
          <p className="signup-check"></p>
          <input
            type="submit"
            value="Sign Up"
            className="signup-button gray-button"
            disabled
          />
        </form>
        <p className="signup-acc">
          Already have an account?{" "}
          <Link
            className="signup-signup blue-text"
            onClick={() => {
              openSign("in");
              closeSign("up");
            }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}

export default Sign;
