import "./ratingReviewsTab.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "../../productRatingStars/ratingStars.jsx";

export function RatingReviewsTab() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8000/product/${id}/reviews`)
        .then((response) => {
          setReviews(response.data.answer.data);
        });
      //console.log(reviews);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (dateCreated) => {
    const date = new Date(dateCreated);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="reviewsTab">
      <div className="reviews-bar">
        <div className="reviews-bar-left">
          <h3>All Reviews</h3>
          <h3>({reviews.length})</h3>
        </div>

        <div className="reviews-bar-right">
          <button className="sorting-btn">
            <select>
              <option value="most-recent">Most Recent</option>
              <option value="highest-rating">Highest Rating</option>
              <option value="lowest-rating">Lowest Rating</option>
            </select>
          </button>

          <button className="write-review-btn">Write a Review</button>
        </div>
      </div>

      <div className="review-container">
        {reviews.map((review) => {
          return (
            <div className="review-card" key={review._id}>
              <Rating rating={review.ratingScore} />
              <div className="reviewer">
                <h4>{review.reviewerName}</h4>{" "}
                <div className="verified-badge">
                  <span className="tick-mark">&#10003;</span>
                </div>
              </div>

              <p>{review.reviewText}</p>
              <p>Posted on {formatDate(review.createdAt)}</p>
            </div>
          );
        })}
      </div>

      {reviews.length === 0 ? (
        <div className="no-reviews">
          <p>No Reviews Yet</p>
        </div>
      ) : (
        <button className="load-btn">Load more Reviews</button>
      )}
    </div>
  );
}
