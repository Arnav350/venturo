import React from "react";
import Stars from "../assets/stars.png";

function ReviewBox({ profile, name, text, date }) {
  return (
    <div className="review-box">
      <figure className="review-fig">
        <img src={profile} alt="Profile1" className="review-profile" />
      </figure>
      <div className="review-body">
        <h3 className="review-name">{name}</h3>
        <p className="review-text">{text}</p>
        <div className="review-bottom">
          <figure className="review-star">
            <img src={Stars} alt="Stars" className="review-rating" />
          </figure>
          <h4 className="review-date">{date}</h4>
        </div>
      </div>
    </div>
  );
}

export default ReviewBox;
