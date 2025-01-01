import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    FullName: {
        type: String,
        required: true,
        trim: true
    },

    DateOfBirth: {
        type: String,
        required: true,
        trim: true
    },

    age: {
        type: Number,
        required: true,
        trim: true
    },

    Address: {
        type: String,
        required: true,
        trim: true
    },

    UserName: {
        type: String,
        required: true,
        trim: true
    },

    Email: {
        type: String,
        required: true,
        trim: true
    },

    Password: {
        type: String,
        required: true,
        trim: true
    },

    role: {
        type: [String],
        default: "user"
    },

    wishList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            default: null

        }
    ]
})

export default mongoose.model('User', userSchema)