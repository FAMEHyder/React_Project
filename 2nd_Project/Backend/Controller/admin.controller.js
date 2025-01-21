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
  const { email, password } = req.body;
  console.log("Your email in the req is:", email);

  try {
    // Find the admin by email
    const admin = await Admin.findOne({ email });
    console.log("Admin email is:", admin);

    // If admin doesn't exist, return an error
    if (!admin) {
      return res.status(401).json({
        status: false,
        message: "Email does not exist",
      });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({
        status: false,
        message: "Invalid password",
      });
    }

    // Generate the JWT token
    const payload = { adminId: admin._id }; // Use adminId for payload
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    // Remove the password from the admin data before sending the response
    const { password: _, ...userData } = admin._doc;

    // Set the token in the cookie
    res.cookie('access', token, { httpOnly: true });

    // Send success response with user data and token
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