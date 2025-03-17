import DataBaseConnection from "./Database/Database.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()
const app =express()
const corsOptions = [

    "http://localhost:5173",
    "http://localhost:5174"
]
app.use(express.json())
app.use(cors(
    {
    origin:corsOptions,
    Credential:true

    }
))

const port = process.env.PORT ||4001
app.listen(port,()=>{
    DataBaseConnection();
    console.log("Server is runing")
})