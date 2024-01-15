import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
      validate(value) {
        if (!isImage(value)) {
          throw new Error("Invalid image URL");
        }
      },
    },
    category: {
      type: String,
      required: true,
      enum: ["clothing", "equipment", "accessories"],
    },
    countInStock: {
      type: Number,
      required: true,
      min: 0,
    },
    averageRating: {
      type: Number,
      //required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;
