import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const DataBaseConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MANGO_URL)
        console.log("Connected to Database successfully")
    }
    catch{
        console.log("Database Connection Failed")
    }


}

mongoose.connection.on("Disconnected",()=>{
    console.log("Disconnected")
})

export default DataBaseConnection;


