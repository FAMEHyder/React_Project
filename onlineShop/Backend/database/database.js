import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const DataBaseConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected To DataBase successfully");
    }
    catch{
        console.log ("Error While Connecting");
    }
}


mongoose.connection.on('Disconnected',()=>{
    console.log("Disconnected")
});

export default DataBaseConnection;