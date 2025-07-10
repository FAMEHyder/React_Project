import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({
        status: true,
        message: "Email not exits ...."
      })

    }
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    // console.log(password, "user",user.password)
    if (!isMatch) {
      return res.status(401).json({
        status: true,
        message: "Invalide Password...."
      })
    }

    const payload = { userId: user._id, role: user.role[0] }
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    const { password, ...userData } = user._doc
    res.cookie('acccess', token, { httpOnly: false })
    res.status(200).json({
      status: true,
      message: `Login Successfully with ${user.username}`,
      userData: userData,
      token: token
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: true,
      message: "Server Error .......",
      err: error
    })

  }
}