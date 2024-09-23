import { Product } from "../models/product.js";


export const addProduct = async (req, res, next) => {
const { name,description, category ,  ...others} = req.body
console.log("Request", req.body)

    try {

        const product = new Product({name,description, category ,  ...others})
        console.log("Step 1 passed")
        await product.save ();
        console.log("Step 2 passed")

        res.status(201).json({message:"Add Successfully ", result : product})
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Somethine went wrong ", error:error.message})
    }
}


export const getProductById= async (req, res, next) => {
    const {id}=req.params;

    try {
        const getProduct=await Product.findById(id);
        res.status(200).json({
            message:`Successfully get the product detail which id id: ${id}`,
            data:getProduct
        })
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            message:"Something went wrong in server side...",
            err:error
        })
        
    }
}

export const delProduct= async (req, res, next) => {
    const {id}=req.params;

    try {
        const del=await Product.findByIdAndDelete(id);
        res
        .status(200)
        .json({
            message:"Successfully delete..",
            data:del
        })
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            message:"Something went wrong in server side...",
            err:error
        })
        
    }
}


export const updatePrduct= async (req, res, next) => {

    try {
        
    } catch (error) {
        
    }
}

export const deleteProduct= async (req, res, next) => {

    try {
        
    } catch (error) {
        
    }
}