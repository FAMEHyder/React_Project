import express from 'express'
import { addWishlist, removeWishlist } from '../Controllers/wishlist.controller.js';

const wishRoute=express.Router();

wishRoute.post('/addWish/:userId/:productId',addWishlist);
wishRoute.delete('/delWish/:userId/:productId',removeWishlist)

export default wishRoute;