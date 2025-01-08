import mongoose from "mongoose";

const marksheetSchema = new mongoose.Schema({
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

export default mongoose.model("Marksheet", marksheetSchema);