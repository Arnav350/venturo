import React from "react";
import Bullet1 from "../assets/bullet1.png";

function AboutReason({ title, para }) {
  return (
    <div className="reason">
      <figure className="reason-fig">
        <img src={Bullet1} alt="Bullet1" className="reason-img" />
      </figure>
      <div className="reason-text">
        <h3 className="reason-title">{title}</h3>
        <p className="reason-para">{para}</p>
      </div>
    </div>
  );
}

export default AboutReason;
