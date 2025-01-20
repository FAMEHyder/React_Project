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

    

    Registration: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Registration',
            default: null
    
        }
    ],
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
        type:Number,
        required:true
    },
    mathScience:{
        type:Number,
       
    },
    biology:{
        type:Number,
        
    },
    physics:{
        type:Number,
        
    },
    chemistry:{
        type:Number,
       
    },
    english:{
        type:Number,
       
    },
    mathArts:{
        type:Number,
       
    },
    generalScience:{
        type:Number,
       
    },
    pakStd:{
        type:Number,
       
    },
    urdu:{
        type:Number,
        
    },


})


const Marksheet = mongoose.model('Marksheet', marksheetSchema);
const User = mongoose.model('User', userSchema);

export { Marksheet, User };