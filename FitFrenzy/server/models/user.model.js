import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
    passwordChangedAt: Date,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  // only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

UserSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  // this.password is not available because it is set to select: false
  return await bcrypt.compare(candidatePassword, userPassword);
};

UserSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  // this.passwordChangedAt is not available because it is set to select: false
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10 // base 10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // false means NOT changed
  return false;
};

const userModel = mongoose.model('User', UserSchema);

export default userModel;
