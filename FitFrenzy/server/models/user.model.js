import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please provide your first name'],
      minlength: 3,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: [true, 'Please provide your last name'],
      minlength: 3,
      maxlength: 20,
    },
    username: {
      type: String,
      required: [true, 'Please provide a username'],
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
      required: [true, 'Please provide a password'],
      select: false,
      minlength: 6,
      maxlength: 20,
    },
    isAdmin: {
      type: Boolean,
      required: [true, 'Please provide your role'],
      default: false,
    },
    membership: {
      type: String,
      required: [true, 'Please provide your membership'],
      default: 'free',
      enum: ['free', 'premium'],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model('User', UserSchema);

export default userModel;
