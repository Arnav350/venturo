import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "./Review.css";
import Profile1 from "../assets/profile1.png";
import Logo from "../assets/logo.png";
import { openSign } from "../components/Utils.js";
import Sign from "../components/Sign.jsx";
import ReviewBox from "../components/ReviewBox.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Review() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setUsers(data);
    setLoading(false);
  }

  return (
    <>
      <main>
        <section>
          <div className="review container">
            <h1 className="review-title">Reviews</h1>
            <div className="review-top">
              <div className="review-write">
                <p className="review-para">
                  We are always looking for feedback so please let us know what
                  you like or what we can do better at Venturo!
                </p>
                <button className="review-button blue-button">
                  Write a Review
                </button>
              </div>
              <figure className="review-logo">
                <img src={Logo} alt="Logo" className="review-img" />
              </figure>
            </div>
            <img src="" alt="" />
            <div className="review-container">
              {loading
                ? [...Array(3)].map((elem, index) => (
                    <ReviewBox
                      key={index}
                      profile={
                        <Skeleton height={200} width={200} circle={true} />
                      }
                      name={<Skeleton height={48} width={696} />}
                      text={<Skeleton height={58} width={696} />}
                      stars={<Skeleton height={25} width={128} />}
                      date={<Skeleton height={25} width={100} />}
                      skeleton={true}
                    />
                  ))
                : users
                    .slice(0, visible)
                    .map((user) => (
                      <ReviewBox
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

              <button
                className="review-load blue-button"
                onClick={() => setVisible((prevValue) => prevValue + 3)}
              >
                Load More
              </button>
              <div className="review-links">
                <button
                  className="review-learn blue-button"
                  onClick={() => openSign("up")}
                >
                  Start Learning
                </button>
                <button
                  className="review-vol white-button"
                  onClick={() => openSign("up")}
                >
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Sign />
    </>
  );
}

export default Review;
