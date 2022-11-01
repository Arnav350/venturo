import React, { useEffect } from "react";
import "../App.css";
import "./About.css";
import Mission from "../assets/mission.jpg";
import { openSign } from "../components/Utils.js";
import Sign from "../components/Sign.jsx";
import AboutReason from "../components/AboutReason.jsx";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="about container">
            <h1 className="about-title">About Venturo Academy</h1>
            <div className="mission">
              <div className="mission-text">
                <h1 className="mission-title">Our Mission</h1>
                <p className="mission-p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                  sint, quibusdam eos voluptas sed accusamus enim praesentium,
                  voluptate aliquam facilis nulla quia tenetur id? Nam magnam ex
                  reiciendis cumque illo?
                </p>
              </div>
              <figure className="mission-fig">
                <img src={Mission} alt="Mission" className="mission-img" />
              </figure>
            </div>
          </div>
        </section>
        <section>
          <div className="bottom container">
            <div className="why">
              <figure className="why-fig">
                <img src={Mission} alt="Mission" className="why-img" />
              </figure>
              <div className="why-box">
                <h1 className="why-title">Why Choose Us?</h1>
                <AboutReason
                  title="Reason 1"
                  para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem numquam asperiores vitae animi iure voluptas"
                />
                <AboutReason
                  title="Reason 2"
                  para="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem numquam asperiores vitae animi iure voluptas"
                />
                <AboutReason
                  title="Reason 3"
                  para="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem numquam asperiores vitae animi iure voluptas"
                />
              </div>
            </div>
            <div className="bottom-links">
              <button
                className="bottom-learn blue-button"
                onClick={() => openSign("up")}
              >
                Start Learning
              </button>
              <button
                className="bottom-vol white-button"
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

export default About;
