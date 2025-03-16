import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const DataBaseConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MANGO_URL)
        console.log("Connected to Database successfully")
    }
    catch{
        console.log("Database Connection Filed")
    }


}

mongoose.connection.on("Disconnected",()=>{
    console.log("Disconnected")
})

export default DataBaseConnection;




// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config()

// export const Database = async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log("Connected")
//     }
//     catch{
//         console.log("Connection Field")
//     }

// }

// mongoose.connection.on("Disconnected",()=>{
//     console.log("Disconnected")
// })

