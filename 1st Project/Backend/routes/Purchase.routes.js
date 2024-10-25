import express from 'express'
import { deletePurchaseProduct, purchaseProduct, AllPurchaseProduct, viewPurchaseProductbyId } from '../Controllers/Purchase.controller.js';

const purchaseRouter=express.Router()

purchaseRouter.post('/',purchaseProduct)
purchaseRouter.get('/purchase/:id',viewPurchaseProductbyId)
purchaseRouter.get('/get',AllPurchaseProduct)
purchaseRouter.delete('/purchase/del',deletePurchaseProduct)




export default purchaseRouter;