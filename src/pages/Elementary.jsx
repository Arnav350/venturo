import React from "react";
import "../App.css";

function Elementary() {
  const oneA = Math.floor(Math.random() * 10 + 1);
  const oneB = Math.floor(Math.random() * 30 + 10);
  const oneC = Math.floor(Math.random() * 10 + 1);
  const oneD = Math.floor(Math.random() * 30 + 10);
  const oneAns = (oneA * oneD) / (oneB * oneC);

  const twoA = Math.floor(Math.random() * 50 + 50);
  const twoB = Math.floor(Math.random() * 5 + 5);
  const twoAns = twoA % twoB;

  const threeA = Math.floor(Math.random() * 3 + 1);
  const threeB = Math.floor(Math.random() * 8 + 3);
  const threeC = Math.floor(Math.random() * 4 + 2);
  const threeAns =
    Math.round((threeA / 4 + threeB / 12 + threeC / 6 + Number.EPSILON) * 100) /
    100;

  const fourA = "temp";

  return (
    <>
      <main>
        <section>
          <h3>Question 1</h3>
          <div>
            What is <sup>{oneA}</sup>&frasl;<sub>{oneB}</sub> &divide;{" "}
            <sup>{oneC}</sup>&frasl;<sub>{oneD}</sub>? {oneAns}
          </div>
          <h3>Question 2</h3>
          <div>
            What is the remainder? {twoA} &divide; {twoB} {twoAns}
          </div>
          <h3>Question 3</h3>
          <div>
            Evaluate and convert to decimal. (round up to 2 decimal places if
            needed) <sup>{threeA}</sup>&frasl;<sub>4</sub> + <sup>{threeB}</sup>
            &frasl;<sub>12</sub> + <sup>{threeC}</sup>&frasl;<sub>6</sub>{" "}
            {threeAns}
          </div>
        </section>
      </main>
    </>
  );
}

export default Elementary;
