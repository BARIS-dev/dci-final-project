import mongoose from "mongoose";

const ProductReviewSchema = new mongoose.Schema(
  {
    reviewerId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: true,
    },
    ratingScore: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    reviewText: {
      type: String,
      minlength: 5,
      required: true,
    },
  },
  { timestamps: true }
);

const productReviewModel = mongoose.model("Review", ProductReviewSchema);

export default productReviewModel;
