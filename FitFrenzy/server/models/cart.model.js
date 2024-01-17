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

const cartModel = mongoose.model("Cart", CartSchema);

export default cartModel;

// FOR CART
//TODO:Removing Items to/from Cart
//TODO: View Cart (show all items in cart)
//TODO: Update item quantity in cart
//TODO: Delete Cart (allow user clear entire cart)
//TODO: Checkout => payment
