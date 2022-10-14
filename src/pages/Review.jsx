import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Review.css";
import Profile1 from "../assets/profile1.png";
import Stars from "../assets/stars.png";

function Review() {
  return (
    <>
      <section>
        <div className="review container">
          <h1 className="review-title">Reviews</h1>
          <div className="review-container">
            <div className="review-box">
              <figure className="review-fig">
                <img src={Profile1} alt="Profile1" className="review-profile" />
              </figure>
              <div className="review-body">
                <h3 className="review-name">Arnav Patel</h3>
                <p className="review-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  in, quam quae tenetur voluptatum omnis ipsam nemo praesentium,
                  minus odit incidunt, hic quisquam harum! Corrupti cum
                  voluptatum doloremque placeat assumenda!
                </p>
                <div className="review-bottom">
                  <figure className="review-star">
                    <img src={Stars} alt="Stars" className="review-rating" />
                  </figure>
                  <h4 className="review-date">April 27, 2034</h4>
                </div>
              </div>
            </div>
            <div className="review-box">
              <figure className="review-fig">
                <img src={Profile1} alt="Profile1" className="review-profile" />
              </figure>
              <div className="review-body">
                <h3 className="review-name">Arnav Patel</h3>
                <p className="review-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  in, quam quae tenetur voluptatum omnis ipsam nemo praesentium,
                  minus odit incidunt, hic quisquam harum! Corrupti cum
                  voluptatum doloremque placeat assumenda!
                </p>
                <div className="review-bottom">
                  <figure className="review-star">
                    <img src={Stars} alt="Stars" className="review-rating" />
                  </figure>
                  <h4 className="review-date">April 27, 2034</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
