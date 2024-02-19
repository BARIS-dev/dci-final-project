import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  username: {
    type: String,
    ref: "User",
    required: true,
  },
  items: [
    {
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
      name: {
        type: String,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        ref: "Product",
      },
      size: {
        type: String,
        ref: "Product",
      },
      color: {
        type: String,
        ref: "Product",
      },
    },
  ],
  sum: {
    type: Number,
    required: true,
    default: 0,
  },
});

CartSchema.pre("save", function (next) {
  this.sum = this.items.reduce((total, item) => {
    return total + item.quantity * item.productPrice;
  }, 0);
  next();
});

const cartModel = mongoose.model("Cart", CartSchema);

export default cartModel;
