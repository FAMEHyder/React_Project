import {User,Registration} from '../Models/user.model.js';

const Createform = async (req, res, next) => {
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
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                status: "fail",
                message: "User not found",
            });
        }

        let images = [];
        if (req.files) {
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

        user.Registration.push(form._id);
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
