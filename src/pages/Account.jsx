import React, { useState, useEffect } from "react";
import "../App.css";
import "./Account.css";
import Profile1 from "../assets/profile1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Account() {
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

  return (
    <>
      <main>
        <section>
          <div className="account container">
            <div className="account-card">
              <h1 className="account-title">Personal Information</h1>
              <img src={Profile1} alt="Profile" className="account-profile" />
              <div className="account-row">
                <h3 className="account-header">Email Address</h3>
                <button className="account-edit blue-button">Edit</button>
              </div>
              <label className="account-mail">
                <input type="text" className="account-email" readOnly />
              </label>
              <div className="account-row">
                <h3 className="account-header">Password</h3>
                <button className="account-edit blue-button">Edit</button>
              </div>
              <label className="account-pass">
                <input type="password" className="account-password" readOnly />
                {type === "password" ? (
                  <FaEye className="account-eye" onClick={showPass} />
                ) : (
                  <FaEyeSlash className="account-eye" onClick={showPass} />
                )}
              </label>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Account;
