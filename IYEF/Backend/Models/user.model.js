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
    examinationYear:{
        type:Number,
        required:true
    },
    Subject1:{
        type:String,
        required:true
       
    },
    Subject2:{
        type:String,
        required:true
       
    },
    Subject3:{
        type:String,
        required:true
       
    },
    Subject4:{
        type:String,
        required:true
       
    },
    Subject5:{
        type:String,
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

const Marksheet = mongoose.model('Marksheet', marksheetSchema);
const Registration = mongoose.model('Registration', formschema);
const User = mongoose.model('User', userSchema);

export { Marksheet, User,Registration };