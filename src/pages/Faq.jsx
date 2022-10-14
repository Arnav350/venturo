import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Faq.css";

function Faq() {
  return (
    <>
      <section>
        <div className="faq container">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-box">
            <div className="faq-text">
              <p className="faq-question">
                <b className="faq-q">Q.</b> How much does tutoring from Venturo
                cost?
              </p>
              <p className="faq-answer">
                <b className="faq-a">A.</b> With individual sessions the price
                is set at $25 but with the purchase of different&nbsp;
                <Link to="/Plan" className="faq-link">
                  plans
                </Link>
                &nbsp;it can be as low as $15!
              </p>
            </div>
            <div className="faq-text">
              <p className="faq-question">
                <b className="faq-q">Q.</b> How should I pay for a tutoring
                session?
              </p>
              <p className="faq-answer">
                <b className="faq-a">A.</b> We accept payment on Paypal, Apple
                Pay, Zelle, and Cashapp. Payment must be sent before the first
                session.
              </p>
            </div>
            <div className="faq-text">
              <p className="faq-question">
                <b className="faq-q">Q.</b> What subjects are offered at
                Venturo?
              </p>
              <p className="faq-answer">
                <b className="faq-a">A.</b> We teach any subject that you want
                from Kindergarten to 8th Grade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
