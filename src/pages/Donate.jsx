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
                <div className="donate-amount gray-button">
                  <p>$25</p>
                </div>
                <div className="donate-amount gray-button">
                  <p>$50</p>
                </div>
                <div className="donate-amount gray-button">
                  <p>$100</p>
                </div>
                <div className="donate-amount gray-button">
                  <p>$250</p>
                </div>
                <div className="donate-amount gray-button">
                  <p>$1000</p>
                </div>
                <div className="donate-amount">
                  <p>$</p>
                  <input type="text" className="donate-number" />
                </div>
                <div className="donate-box">
                  <div className="donate-time gray-button">
                    <p>Monthly</p>
                  </div>
                  <div className="donate-time gray-button">
                    <p>One Time</p>
                  </div>
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
          </div>
        </section>
      </main>
    </>
  );
}

export default Donate;
