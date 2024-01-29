import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      ref: "User",
      required: true,
    },
    productId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const favoriteModel = mongoose.model("Favorite", FavoriteSchema);

export default favoriteModel;
