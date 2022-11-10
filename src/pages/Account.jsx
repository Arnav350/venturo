import React, { useEffect } from "react";
import "../App.css";
import "./Account.css";
import Profile1 from "../assets/profile1.png";

function Account() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="account container">
            <h1 className="account-title">Personal Information</h1>
            <div className="account-card">
              <img src={Profile1} alt="Profile" className="account-profile" />
              <div className="account-row">
                <h3 className="account-header">Email Address</h3>
                <button className="account-edit">Edit</button>
              </div>
              <p className="account-email">Email</p>
              <div className="account-row">
                <h3 className="account-header">Password</h3>
                <button className="account-edit">Edit</button>
              </div>
              <p className="account-password">Password</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Account;
