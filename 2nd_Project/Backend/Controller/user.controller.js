import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const Register = async (req, res, next) => {
    console.log("Your request body is:",req.body);
    const { fullName, dob, age, address, userName, email, password } = req.body;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = new User({

            fullName,
            dob,
            age,
            address,
            userName,
            email,
            password: hashedPassword,
            // password


        })

        await user.save()
        res.status(201).json({

            status: true,
            message: "User Created Successfully",
            data: user
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
    console.log("apka req body ye hay: ",req.body)
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    console.log("apka user : ",user)
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

    const payload = { userId: user._id,}
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    const { password, ...userData } = user._doc
    res.cookie('acccess', token, { httpOnly: false })
    res.status(200).json({
      status: true,
      message: `Login Successfully with ${user.userName}`,
      userData: userData,
      token: token
    })

  } catch (error) {
    // console.log(error)
    res.status(500).json({
      status: true,
      message: "Server Error .......",
      err: error
    })

  }
}