import User from "../Models/user.model.js";
// import bcrypt from "bcryptjs";


const Register = async (req, res, next) => {
    console.log("Your request body is:",req.body);
    const { fullName, dob, age, address, userName, email, password } = req.body;
    // const salt = await bcrypt.genSalt(5);
    // const hashedPassword = await bcrypt.hash(Password, salt);

    try {
        const user = new User({

            fullName,
            dob,
            age,
            address,
            userName,
            email,
            // Password: hashedPassword,
            password


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