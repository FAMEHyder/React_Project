import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const DataBaseConnection = async ()=>{
    try {
        console.log(process.env.MANGO_URL)
        await mongoose.connect(process.env.MANGO_URL)
        console.log("Connected to Database successfully")
    }
    catch(error){
        console.log("Database Connection Failed")
        console.error("Here is Your error : " ,error)
    }


}

mongoose.connection.on("Disconnected",()=>{
    console.log("Disconnected")
})

export default DataBaseConnection;