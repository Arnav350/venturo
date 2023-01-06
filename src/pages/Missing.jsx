import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import "./Missing.css";

function Missing() {
  const naviage = useNavigate();
  function previous() {
    naviage(-1);
  }

  return (
    <>
      <main>
        <section>
          <div className="missing container">
            <h1 className="missing-title">Whoops!</h1>
            <h3 className="missing-sub">404 - Page Not Found</h3>
            <p className="missing-para">
              The page your are looking for is temporarily unavailable. Sorry
              we've led you astray, now let's get you back on course!
            </p>
            <div className="missing-links">
              <Link to="/Home" className="missing-home blue-button">
                Return Home
              </Link>
              <button className="missing-prev white-button" onClick={previous}>
                Previous Page
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Missing;
