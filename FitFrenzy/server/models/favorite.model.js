import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      ref: "User",
      required: true,
    },
    likedItems: [
      {
        productId: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const favoriteModel = mongoose.model("Favorite", FavoriteSchema);

export default favoriteModel;
