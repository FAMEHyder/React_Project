import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        // uniqe:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        // uniqe:true,
        trim:true
    },
    DOB:{
        type:String,
        // required:true,
        
    },
    age:{
        type:Number,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        // uniqe:true,
        
    },
    username:{
        type:String,
        required:true,
        uniqe:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        uniqe:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        // uniqe:true,
        trim:true
    },
    role:{
        type:[String],
        default:"user"
    },
    
    wishList:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        default:null

        }
    ]

})
export default mongoose.model('User',userSchema)