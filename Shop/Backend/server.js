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

// this is the image section
// Define the path to the 'media' folder using an absolute path from the project root
const mediaPath = path.join(__dirname, '..', 'media');

// Serve the 'media' folder as static content
app.use('/media', express.static(mediaPath));
// these are the code to handle the images

// this is the rest pert from the server
const port = process.env.PORT || 8009
app.listen(port, ()=>{
    DataBaseConnection();
    console.log("Conneceting please wait...")
})