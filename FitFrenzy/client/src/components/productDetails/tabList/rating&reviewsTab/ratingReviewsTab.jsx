import "./ratingReviewsTab.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div className="reviews-top-bar">
        <h4>All Reviews</h4>
        <p>({reviews.length})</p>
      </div>
      <p></p>
    </div>
  );
}
