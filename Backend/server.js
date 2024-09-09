import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.use(express.json());

const DataBaseConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected succesfully");
    }
    catch{
        console.log ("something went wrong");
    }
}


mongoose.connection.on('disconnected',()=>{
    console.log("disconnected")
});

app.get("/apii", (req, res)=>{
    res.json([{message:"Hello from asgard" ,starlight: "this is thor"},{message1:"Hello from earth" ,starlight: "this is ironman"}])
    
    })

app.post("/post/:reg",(req,res)=>{
    const param = req.params.reg
    const query = req.query.name
    
    const addedData = `request from front end  ,param :${param},query :${query} `

    res.status(200).json ({message: "successfull",data : addedData})



})
const port = process.env.PORT || 8009
app.listen(port, ()=>{
    DataBaseConnection();
    console.log("Server is Running")
})

