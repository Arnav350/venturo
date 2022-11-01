import React, { useEffect } from "react";
import "../App.css";
import "./Donate.css";
import { Link } from "react-router-dom";

function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="donate container">
            <div className="donate-card">
              <div className="donate-heading">
                <h1>Donate Today</h1>
                <h3>Help us provide tutoring around the globe</h3>
              </div>
              <div className="donate-box">
                <button className="donate-amount">
                  <p>$25</p>
                </button>
                <button className="donate-amount">
                  <p>$50</p>
                </button>
                <button className="donate-amount">
                  <p>$100</p>
                </button>
                <button className="donate-amount">
                  <p>$250</p>
                </button>
                <button className="donate-amount">
                  <p>$1000</p>
                </button>
                <button className="donate-amount">
                  <p>$</p>
                  <input type="text" className="donate-number" />
                </button>
                <div className="donate-box">
                  <button className="donate-time">
                    <p>Monthly</p>
                  </button>
                  <button className="donate-time">
                    <p>One Time</p>
                  </button>
                </div>
              </div>
              <div className="donate-message">
                <p className="donate-p">Would you like to include a message?</p>
                <textarea rows="8" className="donate-text"></textarea>
              </div>
              <Link to="/" className="donate-submit blue-button">
                Submit
              </Link>
            </div>
            <button className="donate-sign blue-button">Sign Up</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Donate;
