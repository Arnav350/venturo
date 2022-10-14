import React from "react";
import "../App.css";
import "./About.css";
import Mission from "../assets/mission.jpg";
import Bullet1 from "../assets/bullet1.png";

function About() {
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
              <div className="reason">
                <figure className="reason-fig">
                  <img src={Bullet1} alt="Bullet1" className="reason-img" />
                </figure>
                <div className="reason-text">
                  <h3 className="reason-title">Reason 1</h3>
                  <p className="reason-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem numquam asperiores vitae animi iure voluptas
                  </p>
                </div>
              </div>
              <div className="reason">
                <figure className="reason-fig">
                  <img src={Bullet1} alt="Bullet1" className="reason-img" />
                </figure>
                <div className="reason-text">
                  <h3 className="reason-title">Reason 2</h3>
                  <p className="reason-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem numquam asperiores vitae animi iure voluptas
                  </p>
                </div>
              </div>
              <div className="reason">
                <figure className="reason-fig">
                  <img src={Bullet1} alt="Bullet1" className="reason-img" />
                </figure>
                <div className="reason-text">
                  <h3 className="reason-title">Reason 3</h3>
                  <p className="reason-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem numquam asperiores vitae animi iure voluptas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-links">
            <a href="" className="bottom-learn blue-button">
              Start Learning
            </a>
            <a href="" className="bottom-vol white-button">
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
