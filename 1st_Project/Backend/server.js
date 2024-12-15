import express from "express";
import dotenv from 'dotenv';
import router from './routes/user.routes.js';
import prodrouter from "./routes/product.routes.js";
import DataBaseConnection from './database/database.js';
import purchase from './routes/Purchase.routes.js';
import wish from './routes/wishlist.routes.js';
import cors from 'cors';
import Cart from './routes/cart.route.js';

dotenv.config();

const app = express()
const corsOptions = [
    "http://localhost:5173",
    "http://localhost:5174"

]

app.use(express.json());
app.use(cors({
    origin:corsOptions,
    credentials:true
}))
app.use('/user', router );
app.use('/product',prodrouter)
app.use('/purchase',purchase)
app.use('/wish',wish)
app.use('/Cart',Cart)

const port = process.env.PORT || 8009
app.listen(port, ()=>{
    DataBaseConnection();
    console.log("Server is Running")
})