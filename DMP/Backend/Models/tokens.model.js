import mongoose from "mongoose";
const tokenschema = new mongoose.schema ({
    AccessToken:{
        type : Number,
        required : true,
        trim : true

    }
})