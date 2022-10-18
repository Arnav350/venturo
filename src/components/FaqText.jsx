import React from "react";

function FaqText({ question, answer }) {
  return (
    <div className="faq-text">
      <p className="faq-question">
        <b className="faq-q">Q.</b> {question}
      </p>
      <p className="faq-answer">
        <b className="faq-a">A.</b> {answer}
      </p>
    </div>
  );
}

export default FaqText;
