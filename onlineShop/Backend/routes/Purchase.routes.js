import express from 'express'
import { deletePurchaseProduct, purchaseProduct, AllPurchaseProduct, viewPurchaseProductbyId } from '../Controllers/Purchase.controller.js';
import {verifyUser} from '../utils/VerifyToken.js';
const purchaseRouter=express.Router()

purchaseRouter.post('/',purchaseProduct)
purchaseRouter.get('/purchase/:id',viewPurchaseProductbyId)
purchaseRouter.get('/get',verifyUser,AllPurchaseProduct)
purchaseRouter.delete('/purchase/del',deletePurchaseProduct)




export default purchaseRouter;