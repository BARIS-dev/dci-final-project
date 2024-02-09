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
      console.log(reviews);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="reviews-bar">
        <div className="reviews-bar-left">
          <h4>All Reviews</h4>
          <p>({reviews.length})</p>
        </div>

        <div className="reviews-bar-right">
          <button className="sorting-btn">
            <select>
              <option value="most-recent">Most Recent</option>
              <option value="highest-rating">Highest Rating</option>
              <option value="lowest-rating">Lowest Rating</option>
            </select>
          </button>
        </div>
      </div>

      <div className="review-container">
        {reviews.map((review) => {
          return (
            <div className="review-card" key={review._id}>
              <Rating rating={review.ratingScore} />
              <h4>{review.userName}</h4>
              {review.reviewText}
            </div>
          );
        })}
      </div>
    </div>
  );
}
