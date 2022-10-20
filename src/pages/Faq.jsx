import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Faq.css";
import FaqText from "../components/FaqText.jsx";

function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="faq container">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-box">
            <FaqText
              question="How much does tutoring from Venturo
                cost?"
              answer={[
                "With individual sessions the price is set at $25 but with the purchase of different",
                <span key={1}>
                  &nbsp;
                  <Link to="/Plan" className="faq-link">
                    plans
                  </Link>
                  &nbsp;
                </span>,
                "it can be as low as $15!",
              ]}
            />
            <FaqText
              question="How should I pay for a tutoring
                session?"
              answer="We accept payment on Paypal, Apple
                Pay, Zelle, and Cashapp. Payment must be sent before the first
                session."
            />
            <FaqText
              question="What subjects are offered at
                Venturo?"
              answer="We teach any subject that you want
                from Kindergarten to 8th Grade."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
