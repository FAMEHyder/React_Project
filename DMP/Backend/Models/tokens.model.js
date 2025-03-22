import mongoose from "mongoose";
const tokenschema = new mongoose.schema ({
    PageAccessToken:{
        type : Number,
        required : true,
        trim : true

    },
    UserToken:{
        type:Number,
        required:true,
        trim: true
    }

})