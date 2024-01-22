import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

//* payload, secret, and options
const signToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = function (user, statusCode, res) {
  // CREATE A TOKEN
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user },
  });
};

// CREATE A USER
const signup = catchAsync(async (req, res, next) => {
  const newUser = await userModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    membership: req.body.membership,
  });

  // SEND TOKEN TO CLIENT
  createSendToken(newUser, 201, res);
});

// LOGIN A USER
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) CHECK IF EMAIL AND PASSWORD EXIST
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  // 2) CHECK IF USER EXISTS && PASSWORD IS CORRECT
  const user = await userModel.findOne({ email }).select('+password'); // select password because it is not selected by default

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // console.log(user);

  // 3) IF EVERYTHING IS OK, SEND TOKEN TO CLIENT
  createSendToken(user, 200, res);
});

const protect = catchAsync(async (req, res, next) => {
  // 1) GET TOKEN AND CHECK IF IT EXISTS
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }

  // 2) VERIFY TOKEN
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) CHECK IF USER STILL EXISTS
  const currentUser = await userModel.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError('The user belonging to this token no longer exists.', 401)
    );
  }

  // 4) CHECK IF USER CHANGED PASSWORD AFTER THE TOKEN WAS ISSUED
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
});

export { signup, login, protect };