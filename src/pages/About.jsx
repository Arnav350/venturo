import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./About.css";
import AboutReason from "../components/AboutReason.jsx";
import Mission from "../assets/mission.jpg";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
            <Link to="/" className="bottom-learn blue-button">
              Start Learning
            </Link>
            <Link to="/" className="bottom-vol white-button">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
