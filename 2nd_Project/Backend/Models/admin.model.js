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

});

export default mongoose.model("Admin" ,adminSchema);