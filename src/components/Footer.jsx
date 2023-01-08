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
    <footer className="footer-bar">
      <div className="container">
        <div className="footer__nav ">
          <div className="footer__links">
            <h3 className="links__title">LEARN MORE</h3>
            <ul>
              <li className="footer__list-item">
                <button className="footer__link">Enroll a Student</button>
              </li>
              <li className="footer__list-item">
                <button className="footer__link">Become a Tutor</button>
              </li>
              <li className="footer__list-item">
                <Link to="/Donate" className="footer__link">
                  Donate
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/Plan" className="footer__link">
                  Plans
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h3 className="links__title">ABOUT US</h3>
            <ul>
              <li className="footer__list-item">
                <Link to="/About" className="footer__link">
                  Mission
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/Faq" className="footer__link">
                  FAQs
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/Review" className="footer__link">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h3 className="links__title">CONTACT</h3>
            <ul>
              <li className="footer__list-item">
                <Link to="/Home" className="links__social">
                  <FaEnvelope className="links__social--icon" />
                  <p className="links__social--name">Email</p>
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/Home" className="links__social">
                  <FaFacebookF className="links__social--icon" />
                  <p className="links__social--name">Facebook</p>
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/Home" className="links__social">
                  <FaInstagram className="links__social--icon" />
                  <p className="links__social--name">Instagram</p>
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/Home" className="links__social">
                  <FaLinkedinIn className="links__social--icon" />
                  <p className="links__social--name">LinkedIn</p>
                </Link>
              </li>
              <li className="footer__list-item">
                <Link to="/Home" className="links__social">
                  <FaTwitter className="links__social--icon" />
                  <p className="links__social--name">Twitter</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="footer__legal">
          <li className="legal__list-item">
            <p className="legal__link">
              Copyright © 2022 Venturo. All Rights Reserved
            </p>
          </li>
          <li className="legal__list-item">
            <Link to="/Home" className="legal__link">
              Terms
            </Link>
          </li>
          <li className="legal__list-item">
            <Link to="/Home" className="legal__link">
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
