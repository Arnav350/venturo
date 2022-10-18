import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Main.css";
import Math from "../assets/math.jpg";
import Steps from "../assets/steps.gif";

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="info container">
          <div className="info-text">
            <h1 className="info-title">
              Lorem, ipsum dolor sit amet elit sit consectetur.
            </h1>
            <p className="info-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minima ipsam eius doloremque.
            </p>
            <div className="info-links">
              <Link to="/" className="info-learn blue-button">
                Start Learning
              </Link>
              <Link to="/" className="info-vol white-button">
                Volunteer
              </Link>
            </div>
          </div>
          <figure className="info-fig">
            <img src={Math} alt="Math" className="info-pic" />
          </figure>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="steps-title">How to Start</h1>
          <div className="steps">
            <figure className="steps-fig">
              <img src={Steps} alt="Steps" className="steps-pic" />
            </figure>
            <div className="steps-text">
              <div className="steps-steps">
                <p className="steps-step">
                  <b>1. </b>Start by creating a Venturo account and signing in.
                </p>
                <p className="steps-step">
                  <b>2. </b>Tell us what subjects you need help on and we will
                  find the perfect tutor for you.
                </p>
                <p className="steps-step">
                  <b>3. </b>Book your lesson by choosing a specific&nbsp;
                  <Link to="/Plan" className="steps-link">
                    plan
                  </Link>
                  &nbsp;with dates and times.
                </p>
                <p className="steps-step">
                  <b>4. </b>Open Zoom and use the chat, microphone, and
                  whiteboard features to work with your 1 on 1 tutor.
                </p>
                <p className="steps-step">
                  <b>5. </b>Don't forget to leave a&nbsp;
                  <Link to="/Review" className="steps-link">
                    review
                  </Link>
                  &nbsp;or a&nbsp;
                  <Link to="/Donate" className="steps-link">
                    donation
                  </Link>
                  !
                </p>
              </div>
              <Link to="/" className="steps-start blue-button">
                Get Started
              </Link>
              <Link to="/Faq" className="steps-more">
                Learn more about Venturo's tutoring
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
