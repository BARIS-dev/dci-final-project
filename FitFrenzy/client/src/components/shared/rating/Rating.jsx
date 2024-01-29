import { useState } from "react";
import star from "../../../assets/img/star.png";
import starGold from "../../../assets/img/stargold.png";
import "./Rating.css";

const Rating = ({rating}) => {
  
  return (
    <div className="rating">
      <div className="star">
        <img className="star-standard" src={star} alt="" />
        <div
          className="star-gold"
          style={rating < 20 ? { width: `${rating * 5}%` } : { width: "100%" }}
        >
          <img src={starGold} alt="" />
        </div>
      </div>
      <div className="star">
        <img className="star-standard" src={star} alt="" />
        <div
          className="star-gold"
          style={
            rating < 20
              ? { width: "0%" }
              : 20 <= rating < 40
              ? { width: `${(rating - 20) * 5}%` }
              : { width: "100%" }
          }
        >
          <img src={starGold} alt="" />
        </div>
      </div>
      <div className="star">
        <img className="star-standard" src={star} alt="" />
        <div
          className="star-gold"
          style={
            rating < 40
              ? { width: "0%" }
              : 40 <= rating < 60
              ? { width: `${(rating - 40) * 5}%` }
              : { width: "100%" }
          }
        >
          <img src={starGold} alt="" />
        </div>
      </div>
      <div className="star">
        <img className="star-standard" src={star} alt="" />
        <div
          className="star-gold"
          style={
            rating < 60
              ? { width: "0%" }
              : 60 <= rating < 80
              ? { width: `${(rating - 60) * 5}%` }
              : { width: "100%" }
          }
        >
          <img src={starGold} alt="" />
        </div>
      </div>
      <div className="star">
        <img className="star-standard" src={star} alt="" />
        <div
          className="star-gold"
          style={
            rating < 80
              ? { width: "0%" }
              : 80 <= rating <= 100
              ? { width: `${(rating - 80) * 5}%` }
              : { width: "100%" }
          }
        >
          <img src={starGold} alt="" />
        </div>
      </div>
      <p>{rating/20} / 5</p>
    </div>
  );
};

export default Rating;
