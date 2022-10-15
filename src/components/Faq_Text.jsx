import React from "react";

function Faq_Text({ question, answer }) {
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

export default Faq_Text;
