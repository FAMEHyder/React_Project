import {User ,Marksheet} from "../Models/user.model.js";
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


export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params; // Extract the user ID from the request parameters
    const user = await User.findById(id); // Fetch the user by ID from the database

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error retrieving user",
      err: error,
    });
  }
};




// Create a marksheet and associate it with a user
export const createMarksheet = async (req, res) => {
  console.log("r b is : " ,req.body)
  console.log("r p is : " ,req.param)
  

  try {
    const { rollno, mathScience, biology, physics, chemistry, english, mathArts, generalScience, pakStd, urdu } = req.body;
    const userId = req.params.userId;
    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new marksheet
    const newMarksheet = new Marksheet({
      rollno,
      mathScience,
      biology,
      physics,
      chemistry,
      english,
      mathArts,
      generalScience,
      pakStd,
      urdu,
    });

    // Save the marksheet to the database
    const savedMarksheet = await newMarksheet.save();

    // Associate the marksheet with the user
    user.Marksheet.push(savedMarksheet._id);
    await user.save();

    res.status(201).json({ message: 'Marksheet created and associated with user', marksheet: savedMarksheet });
  } catch (error) {
    res.status(500).json({ message: 'Error creating marksheet', error: error.message });
  }
};

// Get a user's marksheet(s) with populated data
export const getUserMarksheets = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user and populate the marksheet data
    const user = await User.findById(userId).populate('Marksheet');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User marksheets retrieved', marksheets: user.Marksheet });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving marksheets', error: error.message });
  }
};

// Get a specific marksheet by marksheet ID
export const getMarksheetById = async (req, res) => {
  try {
    const { marksheetId } = req.params;

    // Find the marksheet by ID
    const marksheet = await Marksheet.findById(marksheetId);
    if (!marksheet) {
      return res.status(404).json({ message: 'Marksheet not found' });
    }

    res.status(200).json({ message: 'Marksheet retrieved', marksheet });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving marksheet', error: error.message });
  }
};
