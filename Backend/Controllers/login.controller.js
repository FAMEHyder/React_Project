import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

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
    }
     catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error logging in',  Error: err });
    }
  };
