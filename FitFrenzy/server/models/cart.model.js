import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

export const cartModel = mongoose.model("Cart", CartSchema);
