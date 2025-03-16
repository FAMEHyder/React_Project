import DataBaseConnection from './Database/Database.js';
import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import admin from './Routes/admin.route.js';
import user from './Routes/user.routes.js';
import Form from './Routes/form.routes.js';
import Notice from './Routes/noticeboard.route.js';
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
app.use('/notice', Notice );


const port = process.env.PORT || 8009
app.listen(port, ()=>{
    DataBaseConnection();
    console.log("Server is Running")
})