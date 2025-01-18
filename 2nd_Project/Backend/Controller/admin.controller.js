import Admin from "../Models/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const Register = async (req, res, next) => {
    const { fullName, address, userName, email, password } = req.body;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const admin = new Admin({

            fullName,
            address,
            userName,
            email,
            password: hashedPassword,
            


        })

        await admin.save()
        res.status(201).json({

            status: true,
            message: "User Created Successfully",
            data: admin
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error creating user',
            err: error,
        });
    }
}

export default Register;



export const login = async (req, res) => {
  const { email } = req.body
  try {
    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.status(401).json({
        status: true,
        message: "Email not exits ...."
      })

    }
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) {
      return res.status(401).json({
        status: true,
        message: "Invalide Password...."
      })
    }

    const payload = { userId: user._id,}
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    const { password, ...userData } = user._doc
    res.cookie('acccess', token, { httpOnly: false })
    res.status(200).json({
      status: true,
      message: `Login Successfully with ${admin.userName}`,
      userData: userData,
      token: token
    })

  } catch (error) {
    // console.log(error)
    res.status(500).json({
      status: true,
      message: "Server Error",
      err: error
    })

  }
}