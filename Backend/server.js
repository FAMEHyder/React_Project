import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.routes.js';

dotenv.config();

const app = express()

app.use(express.json());

const DataBaseConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected. succesfully");
    }
    catch{
        console.log ("something went wrong");
    }
}


mongoose.connection.on('disconnected',()=>{
    console.log("disconnected")
});


app.use('/user', router );

const port = process.env.PORT || 8009
app.listen(port, ()=>{
    DataBaseConnection();
    console.log("Server is Running")
})

