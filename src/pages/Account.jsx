import React, { useEffect } from "react";
import "../App.css";
import "./Account.css";

function Account() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section>
          <div>
            <h1>Personal Information</h1>
            <div>
              <img src="" alt="Profile Picture" />
              <h3>Email Address</h3>
              <p>Email</p>
              <h3>Password</h3>
              <p>Password</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Account;
