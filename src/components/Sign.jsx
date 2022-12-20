import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "./Sign.css";
import { Link } from "react-router-dom";
import { auth } from "./init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { openSign, closeSign } from "./Utils.js";
import { Context } from "../App.jsx";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

function Sign() {
  const [type, setType] = useState("password");
  const { user, setUser } = useContext(Context);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    onAuthStateChanged(auth, (user) => {
      // setLoading(false);
      if (user) {
        setUser(user);
      }
    });
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

  function signUpButton() {
    const button = document.querySelector(".signup-button");
    const email = document.querySelector(".signup-email").value;
    const pw = document.querySelector(".signup-password").value;
    const pwc = document.querySelector(".signup-confirm").value;
    button.className = "signup-button gray-button no-button";
    button.disabled = true;
    if (email !== "") {
      if (pw.length >= 6 && pw.length <= 15) {
        if (pw === pwc) {
          button.className = "signup-button blue-button";
          button.disabled = false;
        }
      }
    }
  }

  function register(event) {
    event.preventDefault();
    const verify = document.querySelector(".signup-verify").style;
    const pw = document.querySelector(".signup-password").value;
    const email = document.querySelector(".signup-email").value;
    createUserWithEmailAndPassword(auth, email, pw)
      .then((user) => {
        console.log(user);
        verify.zIndex = 2;
        verify.opacity = 1;
        sendEmailVerification(auth.currentUser);
      })
      .catch((error) => {
        console.log(error);
        document.querySelector(".signup-check").innerHTML =
          "That email address is taken. Try another.";
      });
  }

  async function forgotPassword(event) {
    event.preventDefault();
    const email = document.querySelector(".signin-email").value;
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login(event) {
    event.preventDefault();
    const email = document.querySelector(".signin-email").value;
    const pw = document.querySelector(".signin-password").value;
    signInWithEmailAndPassword(auth, email, pw)
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // function logout(event) {
  //   event.preventDefault();
  //   signOut(auth);
  //   setUser({});
  // }

  return (
    <>
      <div className="signin-card">
        <div className="signin-top">
          <h1 className="signin-title">Sign In</h1>
          <FaTimes className="signin-exit" onClick={() => closeSign("in")} />
        </div>
        <form className="signin-form" onSubmit={login}>
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
              <FaEye className="signin-eye" onClick={showPass} />
            ) : (
              <FaEyeSlash className="signin-eye" onClick={showPass} />
            )}
          </div>
          <p className="signin-check"></p>
          <input
            type="submit"
            value="Sign In"
            className="signin-button blue-button"
          />
        </form>
        <button className="signin-remember blue-text" onClick={forgotPassword}>
          Don't remember your password?
        </button>
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
            onChange={signUpButton}
          />
          <label className="signup-label">Password</label>
          <div className="signup-pass">
            <input
              type={type}
              className="signup-password"
              required="required"
              onBlur={signUpPassword}
              onChange={signUpButton}
            />
            {type === "password" ? (
              <FaEye className="signup-eye" onClick={showPass} />
            ) : (
              <FaEyeSlash className="signup-eye" onClick={showPass} />
            )}
          </div>
          <label className="signup-label">Confirm Password</label>
          <input
            type={type}
            className="signup-confirm"
            required="required"
            onBlur={signUpConfirm}
            onChange={signUpButton}
          />
          <p className="signup-check"></p>
          <input
            type="submit"
            value="Sign Up"
            className="signup-button gray-button no-button"
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
        <div className="signup-verify">
          <h3 className="signup-sent">
            An email has been sent to {user.email}
          </h3>
          <button className="signup-resend blue-button">Resend</button>
        </div>
      </div>
    </>
  );
}

export default Sign;
