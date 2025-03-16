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
  const { userName, password } = req.body;

  try {
    const admin = await Admin.findOne({ userName });

    if (!admin) {
      return res.status(401).json({
        status: false,
        message: "Email does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({
        status: false,
        message: "Invalid password",
      });
    }

    const payload = { adminId: admin._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    const { password: _, ...userData } = admin._doc;

    res.cookie('access', token, { httpOnly: true });

    res.status(200).json({
      status: true,
      message: `Login successfully with ${admin.userName}`,
      userData,
      token,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server error",
      error,
    });
  }
};