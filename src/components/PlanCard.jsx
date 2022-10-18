import { Link } from "react-router-dom";
import React from "react";
import { FaCheck } from "react-icons/fa";

function PlanCard({
  time = "Biweekly",
  price,
  ses = "/Session",
  length = "1 Hour Sessions",
  num = "Individual",
  third = true,
}) {
  return (
    <div className="plan-card">
      <h3 className="plan-time plan-text">{time}</h3>
      <h4 className="plan-sub plan-text">Monthly Billing Period</h4>
      <h1 className="plan-price plan-text">{price}</h1>
      <h4 className="plan-ses plan-text">{ses}</h4>
      <Link to="/" className="plan-button blue-button">
        Choose
      </Link>
      <ul className="plan-list">
        <li className="plan-item">
          <FaCheck className="plan-check plan-text" />
          <p className="plan-text">{length}</p>
        </li>
        <li className="plan-item">
          <FaCheck className="plan-check plan-text" />
          <p className="plan-text">{num}</p>
        </li>
        {third ? (
          <li className="plan-item">
            <FaCheck className="plan-check plan-text" />
            <p className="plan-text">Try now for Free</p>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default PlanCard;
