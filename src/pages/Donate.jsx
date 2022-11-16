import React, { useEffect } from "react";
import "../App.css";
import "./Donate.css";
import Sign from "../components/Sign.jsx";
import { Link } from "react-router-dom";
import { openSign } from "../components/Utils.js";

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
                <button className="donate-amount gray-button">
                  <p>$25</p>
                </button>
                <button className="donate-amount gray-button">
                  <p>$50</p>
                </button>
                <button className="donate-amount gray-button">
                  <p>$100</p>
                </button>
                <button className="donate-amount gray-button">
                  <p>$250</p>
                </button>
                <button className="donate-amount gray-button">
                  <p>$1000</p>
                </button>
                <button className="donate-amount gray-button">
                  <p>$</p>
                  <input type="text" className="donate-number" />
                </button>
                <div className="donate-box">
                  <button className="donate-time gray-button">
                    <p>Monthly</p>
                  </button>
                  <button className="donate-time gray-button">
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
            <div className="donate-links">
              <button
                className="donate-learn blue-button"
                onClick={() => openSign("up")}
              >
                Start Learning
              </button>
              <button
                className="donate-vol white-button"
                onClick={() => openSign("up")}
              >
                Volunteer
              </button>
            </div>
          </div>
        </section>
      </main>
      <Sign />
    </>
  );
}

export default Donate;
