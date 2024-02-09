import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  username: {
    type: String,
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
      productName: {
        type: String,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
      },
      productPrice: {
        type: Number,
        ref: "Product",
      },
      productSize: {
        type: String,
        ref: "Product",
      },
      productColor: {
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
