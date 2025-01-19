import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        trim: true
    },

    dob: {
        type: String,
        required: true,
        trim: true
    },

    Class: {
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



const marksheetSchema = new mongoose.Schema({
    rollno:{
        type:number,
        required:true
    },
    mathScience:{
        type:Number,
        required: true
    },
    biology:{
        type:Number,
        required: true
    },
    physics:{
        type:Number,
        required: true
    },
    chemistry:{
        type:Number,
        required: true
    },
    english:{
        type:Number,
        required: true
    },
    mathArts:{
        type:Number,
        required: true
    },
    generalScience:{
        type:Number,
        required: true
    },
    pakStd:{
        type:Number,
        required: true
    },
    urdu:{
        type:Number,
        required: true
    },


})


const Marksheet = mongoose.model('Marksheet', marksheetSchema);
const User = mongoose.model('User', userSchema);

export { Marksheet, User };