import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email Not Found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid  password' });
    }
    const payload = { userId: user._id, role: user.roles[0] }; 
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
  
    res.cookie('access_token', token, { httpOnly: true }); 
    res.status(200).json({ message: 'Login successful', Detail : user.email, });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in',  Error: err });
  }
};