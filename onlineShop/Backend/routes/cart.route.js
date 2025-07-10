// routes/cart.js
import express from "express";
import {addToCart,getProductFromCart,deleteProductFromCart} from '../Controllers/Cart.controller.js';

const router = express.Router();

// POST route to add product to cart
router.post('/add/:userId/:productId', addToCart);

// Route to get all products from cart
router.get('/:userId', getProductFromCart);

// Route to delete a product from cart
router.delete('/:userId/:productId', deleteProductFromCart);

export default router;