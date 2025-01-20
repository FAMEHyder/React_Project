import {User,Registration} from '../Models/user.model.js'; // Import the User model

const Createform = async (req, res, next) => {
    const {
        userId, // Include userId in the request body
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
        // Find the user by userId
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                status: "fail",
                message: "User not found",
            });
        }

        // Handle uploaded images
        let images = [];
        if (req.files) {
            images = req.files.map((file) => file.path); // Store file paths in images array
        }

        // Create the form
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

        // Save the form
        await form.save();

        // Update the user's Registration field
        user.Registration.push(form._id); // Add the form ID to the Registration array
        await user.save();

        res.status(201).json({
            status: "success",
            message: "Form Created and User Updated Successfully!",
            data: {
                form,
                user,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            err: error.message,
        });
    }
};

export default Createform;
