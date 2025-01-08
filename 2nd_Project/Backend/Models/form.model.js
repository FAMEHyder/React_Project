import mongoose from "mongoose";

const formschema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },

    cnic: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    Class: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    guardianName: {
        type: String,
        required: true
    },
    relationship: {
        type: String,
        required: true

    },
    guardianPhoneNumber: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    }


})

export default mongoose.model("Form", formschema);