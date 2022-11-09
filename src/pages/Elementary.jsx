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

  const fourA = Math.floor((Math.random() * 6 + 5) * 100) / 100;
  const fourB = Math.floor(Math.random() * 5 * 100) / 100;
  const fourAns = fourA - fourB;

  const fiveA = Math.floor(Math.random() * 3);
  const fiveAns = fiveA === 0 ? "8:30" : fiveA === 1 ? "3:00" : "1:15";

  const sixA = Math.floor(Math.random() * 5 + 2);
  const sixB = Math.floor(Math.random() * 5 + 1);
  const sixC = Math.floor(Math.random() * 5 + 3);
  const sixAns = sixA * sixB * sixC;

  const sevenA = Math.floor((Math.random() * 50 + 51) / 10) * 10;
  const sevenB = Math.floor(Math.random() * 9 + 1);
  const sevenAns = (sevenA * sevenB) / 10;

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
            Evaluate and convert to decimal. (round to 2 decimal places if
            needed) <sup>{threeA}</sup>&frasl;<sub>4</sub> + <sup>{threeB}</sup>
            &frasl;<sub>12</sub> + <sup>{threeC}</sup>&frasl;<sub>6</sub>{" "}
            {threeAns}
          </div>
          <h3>Question 4</h3>
          <div>
            Andrew wants to buy a bat for {fourA} and pays {fourB}, how much
            change should he get {fourAns}
          </div>
          <h3>Question 5</h3>
          <div>
            What time does the clock say?{" "}
            {fiveA === 0 ? (
              <img src="" alt="8:30" />
            ) : fiveA === 1 ? (
              <img src="" alt="3:00" />
            ) : (
              <img src="" alt="1:15" />
            )}{" "}
            {fiveAns}
          </div>
          <h3>Question 6</h3>
          <div>
            What is the area of a rectangular prism with side lengths {sixA}cm,{" "}
            {sixB}cm, and {sixC}cm? {sixAns}cm^3
          </div>
          <h3>Question 7</h3>
          <div>
            Isabella is taking a {sevenA} mile long road trip. She is currently{" "}
            <sup>{sevenB}</sup>&frasl;<sub>10</sub> of the way through her road
            trip. How many miles has she traveled so far? {sevenAns}
          </div>
        </section>
      </main>
    </>
  );
}

export default Elementary;
