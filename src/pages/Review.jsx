import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "./Review.css";
import Review_Box from "../components/Review_Box.jsx";
import Profile1 from "../assets/profile1.png";

function Review() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    main();
  }, []);

  async function main() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setUsers(data);
  }

  return (
    <>
      <section>
        <div className="review container">
          <h1 className="review-title">Reviews</h1>
          <div className="review-container">
            {users.map((user) => (
              <Review_Box
                key={user.id}
                profile={Profile1}
                name={user.name}
                text={user.body}
                date={
                  user.postId +
                  "/" +
                  user.id +
                  "/" +
                  Math.floor(Math.random() * 2000 + 1000)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
