import React from "react";
import "../App.css";
import "./Plan.css";
import Plan_Card from "../components/Plan_Card.jsx";

function Plan() {
  return (
    <>
      <section>
        <div className="plan container">
          <h1 className="plan-title">Payment Plans</h1>
          <div className="plan-box">
            <Plan_Card time="Weekly" price="$22" />
            <Plan_Card price="$20" />
            <Plan_Card price="$15" num="Group Lesson" third={false} />
            <Plan_Card time="Weekly" price="$25" length="Half Hour Sessions" />
            <Plan_Card
              time="Custom"
              price="$--"
              ses="Click for an estimate"
              length="Any Length"
              third={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Plan;
