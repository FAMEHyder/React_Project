import express from 'express'
import { addWishlist, removeWishlist,getWishlist } from '../Controllers/wishlist.controller.js';

const wishRoute=express.Router();

wishRoute.post('/addWish/:userId/:productId',addWishlist);
wishRoute.delete('/delWish/:userId/:productId',removeWishlist)
wishRoute.get('/wishlist/:userId', getWishlist);

export default wishRoute;