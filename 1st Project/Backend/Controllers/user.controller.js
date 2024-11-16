import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

// Register a new user
const register = async (req, res, next) => {
  const { firstName, lastName, DOB, age, address, username, email, password } = req.body;

  const salt = await bcrypt.genSalt(5);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log("Your User name is : ", username);

  try {
    const user = new User({
      firstName,
      lastName,
      DOB,
      age,
      address,
      username,
      email,
      password: hashedPassword,
    });
    console.log(user);
    await user.save();
    res.status(201).json({
      status: true,
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error creating user',
      err: error,
    });
  }
};

export default register;

// Get user by ID
export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: `User with ID ${id} retrieved successfully`,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error retrieving user details',
      err: error,
    });
  }
};

// View user by ID and populate wishlist
export const viewUserbyId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate('wishList');
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not Found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: `User with ID ${id} retrieved successfully`,
      userDetail: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      err: error,
    });
  }
};

// Get all users
export const getAllUsers = async (req, res, next) => {
  console.log("You are in getAllUsers");
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
