import express from "express"
import {
    addProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updatePrduct
} from "./controllers/product.controller.js";

const prodrouter = express.Router();



prodrouter.post('/add', addProduct);
prodrouter.get('/get/:id', getProducts);
prodrouter.delete('/del/:id', getProductById);
prodrouter.put('/:id', updatePrduct);


//http://localhost:8000/api/user/register

export default prodrouter;