import express from "express";
import dotenv from 'dotenv';
import router from './routes/user.routes.js';
import prodrouter from "./routes/product.routes.js";
import DataBaseConnection from './database/database.js';
import purchase from './routes/Purchase.routes.js';



dotenv.config();
const app = express()

app.use(express.json());

app.use('/user', router );
app.use('/product',prodrouter)
app.use('/product',prodrouter)
app.use('/purchase',purchase)

const port = process.env.PORT || 8009
app.listen(port, ()=>{
    DataBaseConnection();
    console.log("Server is Running")
})

