import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    category: {
      type: String,
      required: true,
      enum: ["Sportbekleidung", "Sportschuhe", "Sportausrüstung"],
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
      enum: [
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "Einheitsgröße",
      ],
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
