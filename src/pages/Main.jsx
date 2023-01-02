import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Main.css";
import Math from "../assets/math.jpg";
import Steps from "../assets/steps.gif";
import Sign from "../components/Sign.jsx";
import { openSign } from "../components/Utils.js";

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
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
                <button
                  className="info-learn blue-button"
                  onClick={() => openSign("in")}
                >
                  Start Learning
                </button>
                <button
                  className="info-vol white-button"
                  onClick={() => openSign("up")}
                >
                  Volunteer
                </button>
              </div>
            </div>
            <figure className="info-fig">
              <img src={Math} alt="Math" className="info-pic" />
            </figure>
          </div>
        </section>

        <section>
          <div className="steps container">
            <h1 className="steps-title">How to Start</h1>
            <div className="steps-box">
              <figure className="steps-fig">
                <img src={Steps} alt="Steps" className="steps-pic" />
              </figure>
              <div className="steps-text">
                <div className="steps-steps">
                  <p className="steps-step">
                    <b>1. </b>Start by creating a Venturo account and signing
                    in.
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
                    <b>5. </b>Don't forget to leave a{" "}
                    <Link to="/Review" className="steps-link">
                      review
                    </Link>{" "}
                    or a{" "}
                    <Link to="/Donate" className="steps-link">
                      donation
                    </Link>
                    !
                  </p>
                </div>
                <button
                  className="steps-start blue-button"
                  onClick={() => openSign("up")}
                >
                  Get Started
                </button>
                <Link to="/Faq" className="steps-more">
                  Learn more about Venturo's tutoring
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="help container">
            <h1 className="help-title">Want to Help?</h1>
            <div className="help-vol">
              <div className="help-text">
                <h3 className="help-sub">Volunteer</h3>
                <p className="help-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas soluta, excepturi est laborum minus nihil,
                  consectetur placeat quae, culpa deleniti repudiandae vitae aut
                  eaque! Ratione dolorem sit placeat atque suscipit!
                </p>
              </div>
              <figure className="help-fig">
                <img src={Math} alt="math" className="help-img" />
              </figure>
            </div>
            <div className="help-don">
              <figure className="help-fig">
                <img src={Steps} alt="math" className="help-img" />
              </figure>
              <div className="help-text">
                <h3 className="help-sub">Donate</h3>
                <p className="help-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  qui odit sapiente ducimus nesciunt. Laborum voluptatem quos
                  atque delectus asperiores? Maiores excepturi nemo mollitia
                  numquam eum inventore asperiores dolor? Libero.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Sign />
    </>
  );
}

export default Main;
