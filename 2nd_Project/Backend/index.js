import express from "express";
import dotenv from 'dotenv';
import admin from './Routes/admin.route.js';
import user from './Routes/user.routes.js';
import Form from './Routes/form.routes.js';
import DataBaseConnection from './Database/Database.js';
import cors from 'cors';

dotenv.config();

const app = express()
const corsOptions = [
    "http://localhost:5173",
    "http://localhost:5174"

]

app.use(express.json());
app.use(cors(
    {
    origin:corsOptions,
    credentials:true
}
))
app.use('/Admin', admin );
app.use('/user', user );
app.use('/form', Form );


const port = process.env.PORT || 8009
app.listen(port, ()=>{
    DataBaseConnection();
    console.log("Server is Running")
})