import React, { useEffect } from "react";
import "../App.css";
import "./Plan.css";
import PlanCard from "../components/PlanCard.jsx";

function Plan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="plan container">
            <h1 className="plan-title">Payment Plans</h1>
            <div className="plan-box">
              <PlanCard time="Weekly" price="$22" />
              <PlanCard price="$20" />
              <PlanCard price="$15" num="Group Lessons" third={false} />
              <PlanCard time="Weekly" price="$25" length="Half Hour Sessions" />
              <PlanCard
                time="Custom"
                price="$--"
                ses="Click for an estimate"
                length="Any Length"
                third={false}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Plan;
