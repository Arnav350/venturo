import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Plan.css";

function Plan() {
  return (
    <>
      <section>
        <div className="plan container">
          <h1 className="plan-title">Payment Plans</h1>
          <div className="plan-box">
            <div className="plan-card">
              <h3 className="plan-time plan-text">Weekly</h3>
              <h4 className="plan-sub plan-text">Monthly Billing Period</h4>
              <h1 className="plan-price plan-text">$22</h1>
              <h4 className="plan-ses plan-text">/Session</h4>
              <Link to="/" className="plan-button blue-button">
                Choose
              </Link>
              <ul className="plan-list">
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">1 Hour Sessions</p>
                </li>
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Individual</p>
                </li>
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Try now for Free</p>
                </li>
              </ul>
            </div>
            <div className="plan-card">
              <h3 className="plan-time plan-text">Biweekly</h3>
              <h4 className="plan-sub plan-text">Monthly Billing Period</h4>
              <h1 className="plan-price plan-text">$20</h1>
              <h4 className="plan-ses plan-text">/Session</h4>
              <Link to="/" className="plan-button blue-button">
                Choose
              </Link>
              <ul className="plan-list">
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">1 Hour Sessions</p>
                </li>
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Individual</p>
                </li>
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Try now for Free</p>
                </li>
              </ul>
            </div>
            <div className="plan-card">
              <h3 className="plan-time plan-text">Biweekly</h3>
              <h4 className="plan-sub plan-text">Monthly Billing Period</h4>
              <h1 className="plan-price plan-text">$15</h1>
              <h4 className="plan-ses plan-text">/Session</h4>
              <Link to="/" className="plan-button blue-button">
                Choose
              </Link>
              <ul className="plan-list">
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">1 Hour Sessions</p>
                </li>
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Group Lesson</p>
                </li>
              </ul>
            </div>
            <div className="plan-card">
              <h3 className="plan-time plan-text">Weekly</h3>
              <h4 className="plan-sub plan-text">Monthly Billing Period</h4>
              <h1 className="plan-price plan-text">$25</h1>
              <h4 className="plan-ses plan-text">/Session</h4>
              <Link to="/" className="plan-button blue-button">
                Choose
              </Link>
              <ul className="plan-list">
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Half Hour Sessions</p>
                </li>
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Individual</p>
                </li>
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Try now for Free</p>
                </li>
              </ul>
            </div>
            <div className="plan-card">
              <h3 className="plan-time plan-text">Custom</h3>
              <h4 className="plan-sub plan-text">Monthly Billing Period</h4>
              <h1 className="plan-price plan-text">$--</h1>
              <h4 className="plan-ses plan-text">Click for an estimate</h4>
              <Link to="/" className="plan-button blue-button">
                Choose
              </Link>
              <ul className="plan-list">
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Any Length</p>
                </li>
                <li className="plan-item">
                  <i className="fa-solid fa-check plan-check plan-text"></i>
                  <p className="plan-text">Individual</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Plan;
