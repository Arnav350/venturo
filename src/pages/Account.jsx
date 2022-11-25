import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "./Account.css";
import Profile1 from "../assets/profile1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Context } from "../App.jsx";

function Account() {
  const [type, setType] = useState("password");
  const { userEmail, setEmail } = useContext(Context);
  const { userPass, setPass } = useContext(Context);

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
                <h3 className="account-item">First Name</h3>
                <h3 className="account-item">Last Name</h3>
                <button className="account-edit blue-button">Edit</button>
              </div>
              <div className="account-names">
                <label className="account-name">
                  <input type="text" className="account-first" readOnly />
                </label>
                <label className="account-name">
                  <input type="text" className="account-last" readOnly />
                </label>
              </div>
              <h3 className="account-item">Email Address</h3>
              <label className="account-mail">
                <input
                  type="text"
                  className="account-email"
                  value={userEmail}
                  readOnly
                />
              </label>
              <div className="account-row">
                <h3 className="account-item">Password</h3>
                <button className="account-edit blue-button">Edit</button>
              </div>
              <label className="account-pass">
                <input
                  type="password"
                  className="account-password"
                  value={userPass}
                  readOnly
                />
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
