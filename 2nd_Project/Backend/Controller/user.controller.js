import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const Register = async (req, res, next) => {
    const { fullName, dob, Class, address, userName, email, password } = req.body;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = new User({

            fullName,
            dob,
            Class,
            address,
            userName,
            email,
            password: hashedPassword,
            


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

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    if (!users || users.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No users found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Users retrieved successfully",
      data: users,
    });


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error retrieving users',
      err: error,
    });
  }
};