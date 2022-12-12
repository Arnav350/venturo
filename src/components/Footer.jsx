import React from "react";
import "../App.css";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-bar">
          <div className="footer-list">
            <h3 className="footer-title">LEARN MORE</h3>
            <ul className="footer-learn">
              <li className="footer-li">
                <button className="footer-a">Enroll a Student</button>
              </li>
              <li className="footer-li">
                <button className="footer-a">Become a Tutor</button>
              </li>
              <li className="footer-li">
                <Link to="/Donate" className="footer-a">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/Plan" className="footer-a">
                  Plans
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-title">ABOUT US</h3>
            <ul className="footer-about">
              <li className="footer-li">
                <Link to="/About" className="footer-a">
                  Mission
                </Link>
              </li>
              <li className="footer-li">
                <Link to="/Faq" className="footer-a">
                  FAQs
                </Link>
              </li>
              <li className="footer-li">
                <Link to="/Review" className="footer-a">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-connect">
            <h3 className="footer-title">CONTACT</h3>
            <ul className="footer-contacts">
              <li className="footer-li">
                <Link to="/Home" className="footer-contact">
                  <FaEnvelope className="footer-icon" />
                  <p className="footer-text">Email</p>
                </Link>
              </li>
              <li className="footer-li">
                <Link to="/Home" className="footer-contact">
                  <FaFacebookF className="footer-icon" />
                  <p className="footer-text">Facebook</p>
                </Link>
              </li>
              <li className="footer-li">
                <Link to="/Home" className="footer-contact">
                  <FaInstagram className="footer-icon" />
                  <p className="footer-text">Instagram</p>
                </Link>
              </li>
              <li className="footer-li">
                <Link to="/Home" className="footer-contact">
                  <FaLinkedinIn className="footer-icon" />
                  <p className="footer-text">LinkedIn</p>
                </Link>
              </li>
              <li className="footer-li">
                <Link to="/Home" className="footer-contact">
                  <FaTwitter className="footer-icon" />
                  <p className="footer-text">Twitter</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="footer-legal">
          <li>
            <p className="footer-a">
              Copyright © 2022 Venturo. All Rights Reserved
            </p>
          </li>
          <li className="footer-li">
            <Link to="/Home" className="footer-a">
              Terms
            </Link>
          </li>
          <li className="footer-li">
            <Link to="/Home" className="footer-a">
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
