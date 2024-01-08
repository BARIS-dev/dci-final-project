import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    membership: {
      type: String,
      required: true,
      default: "free",
      enum: ["free", "premium"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", UserSchema);

export default userModel;
