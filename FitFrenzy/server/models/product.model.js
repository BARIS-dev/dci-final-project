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
      enum: ["Bekleidung", "Ausrüstung", "Accessoires"],
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
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    size: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL", "Einheitsgröße"],
    },
    color: {
      type: String,
      enum: [
        "Schwarz",
        "Weiß",
        "Rot",
        "Blau",
        "Gelb",
        "Grün",
        "Braun",
        "Grau",
        "Lila",
        "Orange",
        "Rosa",
        "Türkis",
        "Gold",
        "Silber",
        "Mehrfarbig",
      ],
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
