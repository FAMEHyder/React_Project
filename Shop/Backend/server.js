import express from "express";
import dotenv from 'dotenv';
import router from './routes/user.routes.js';
import prodrouter from "./routes/product.routes.js";
import DataBaseConnection from './database/database.js';
import purchase from './routes/Purchase.routes.js';
import wish from './routes/wishlist.routes.js';
import cors from 'cors';
import Cart from './routes/cart.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

nhi 
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
    console.log("Conneceting please wait...")
})




// Resolve the __dirname of the current file
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// Define the path to the 'media' folder using an absolute path from the project root
const mediaPath = path.join(__dirname, '..', 'media');

// Log to verify that the path is correct


// Serve the 'media' folder as static content
app.use('/media', express.static(mediaPath));


  app.use(cors({
    origin: function(origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));
// app.use("/media", express.static(path.join(__dirname, "media")));
app.use(express.json({limit:process.env.LIMITS}));
app.use(express.urlencoded({extended:true,limit:process.env.LIMITS}));
app.use(cookieParser())