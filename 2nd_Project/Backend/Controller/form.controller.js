import Form from '../Models/form.model.js';
const Createform = async (req, res, next) => {
    const { fullName, fatherName, phoneNumber, cnic, gender, address, Class, institution, field, guardianName, relationship, guardianPhoneNumber } = req.body;

    try {


        let images = [];
        if (req.files) {
            images = req.files.map(file => file.path); // Store file paths in images array
        }
        const form = new Form({
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
            images
        })
        await form.save();
        res.status(201).json({
            status: "success",
            message: "Form Created Successfully!",
            data: form
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({

            message: "Internal Server Error",
            err: error
        })

    }


}

export default Createform;