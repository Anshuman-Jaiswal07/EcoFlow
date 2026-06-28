import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import AppError from '../utils/appError.js';

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

export const register = async (req, res, next) => {
  try {
    const { name, company, email, password, type } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) return next(new AppError('Entity already established with this email.', 400));

    const newUser = await User.create({ name, company, email, password, type });
    const token = signToken(newUser._id);

    res.status(201).json({ success: true, token, data: { user: newUser } });
  } catch (error) { next(error); }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return next(new AppError('Provide both email and security credentials.', 400));

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Incorrect security key profile credentials.', 401));
    }

    const token = signToken(user._id);
    res.status(200).json({ success: true, token, user: { name: user.name, company: user.company, type: user.type, role: user.role } });
  } catch (error) { next(error); }
};