import {User ,Marksheet,Registration} from "../Models/user.model.js";
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
  const { userName } = req.body
  try {
    const user = await User.findOne({ userName })
    if (!user) {
      return res.status(401).json({
        status: true,
        message: "Username not exits ...."
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
      message: `Login Successfully with ${user.userName}`,
      userData: userData,
      token: token
    })

  } catch (error) {
    res.status(500).json({
      status: true,
      message: "Server Error .......",
      err: error
    })

  }
}

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find(); 
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
    const { id } = req.params; 
    const user = await User.findById(id); 

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




export const createMarksheet = async (req, res) => {
  console.log("your req.body is :" ,req.body)
  

  try {
    const { rollno,examinationYear, Subject1,Subject2,Subject3,Subject4,Subject5, mathScience, biology, physics, chemistry, english, mathArts, generalScience, pakStd, urdu } = req.body;
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newMarksheet = new Marksheet({
      rollno,
      examinationYear,
      Subject1,
      Subject2,
      Subject3,
      Subject4,
      Subject5,
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

    const savedMarksheet = await newMarksheet.save();

    user.Marksheet.push(savedMarksheet._id);
    await user.save();

    res.status(201).json({ message: 'Marksheet created and associated with user', marksheet: savedMarksheet });
  } catch (error) {
    res.status(500).json({ message: 'Error creating marksheet', error: error.message });
  }
};


export const Createform = async (req, res, next) => {
  const {
      userId,
      fullName,
      fatherName,
      phoneNumber,
      cnic,
      gender,
      address,
      Class,
      institution,
      field,
      guardianName,
      relationship,
      guardianPhoneNumber,
  } = req.body;

  try {
      if (
          !userId ||
          !fullName ||
          !fatherName ||
          !phoneNumber ||
          !cnic ||
          !gender ||
          !address ||
          !Class ||
          !institution ||
          !field ||
          !guardianName ||
          !relationship ||
          !guardianPhoneNumber
      ) {
          return res.status(400).json({
              status: "fail",
              message: "All fields are required",
          });
      }

      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({
              status: "fail",
              message: "User not found",
          });
      }

      let images = [];
      if (req.files && req.files.length > 0) {
          images = req.files.map((file) => file.path);
      }

      const form = new Registration({
          fullName,
          fatherName,
          phoneNumber,
          cnic,
          gender,
          address,
          Class,
          institution,
          field,
          guardianName,
          relationship,
          guardianPhoneNumber,
          images,
      });

      await form.save();

      if (!Array.isArray(user.Registration)) {
          user.Registration = [];
      }

      user.Registration.push(form._id);

      await user.save();

      const updatedUser = await User.findById(userId).populate("Registration");

      res.status(201).json({
          status: "success",
          message: "Form created and user updated successfully",
          data: {
              form,
              user: updatedUser, 
          },
      });
  } catch (error) {
      res.status(500).json({
          status: "error",
          message: "Internal server error",
          error: error.message,
      });
  }
};



export const getMarksheetById = async (req, res) => {
  const { marksheetId } = req.params;

  try {
    const marksheet = await Marksheet.findById(marksheetId);
    if (!marksheet) {
      return res.status(404).json({ message: "Marksheet not found" });
    }
    res.status(200).json(marksheet);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching marksheet" });
  }
};

export const getRegistrationById = async (req, res) => {
  const { registrationId } = req.params;

  try {
    const registration = await Registration.findById(registrationId);
    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }
    res.status(200).json(registration);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching registration" });
  }
};

