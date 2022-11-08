import React from "react";
import "../App.css";

function Elementary() {
  const oneA = Math.floor(Math.random() * 10 + 1);
  const oneB = Math.floor(Math.random() * 30 + 1);
  const oneC = Math.floor(Math.random() * 10 + 1);
  const oneD = Math.floor(Math.random() * 30 + 1);
  const oneAns = (oneA * oneD) / (oneB * oneC);

  return (
    <>
      <main>
        <section>
          <h3>Question 1</h3>
          <div>
            What is <sup>{oneA}</sup>&frasl;<sub>{oneB}</sub> &divide;{" "}
            <sup>{oneC}</sup>&frasl;<sub>{oneD}</sub> ?
          </div>
        </section>
      </main>
    </>
  );
}

export default Elementary;
