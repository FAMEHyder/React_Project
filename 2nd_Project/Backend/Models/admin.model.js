import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        trim: true
    },

    address: {
        type: String,
        required: true,
        trim: true
    },

    userName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    Registration: {
        type: [String],
        default: "user"
    },

    Marksheet: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Marksheet',
            default: null

        }
    ]
});

export default mongoose.model("Admin" ,adminSchema);