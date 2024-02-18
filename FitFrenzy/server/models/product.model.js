import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    category: {
      type: String,
      required: true,
      enum: ["clothing", "equipment", "accessories"],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      //required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    size: {
      type: [String],
      enum: ["XS", "S", "M", "L", "XL", "XXL", "One size"],
    },
    color: {
      type: [String],
      enum: [
        "black",
        "white",
        "red",
        "blue",
        "yellow",
        "green",
        "brown",
        "gray",
        "purple",
        "orange",
        "pink",
        "turquoise",
        "gold",
        "silver",
        "multicolored",
      ],
    },
    countInStock: {
      type: Number,
      required: true,
      min: 0,
    },
    averageRating: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;
