import ProductPurchase from '../model/productPurchase.model.js'

export const purchaseProduct=async(req,res,next)=>{
    const purchaseProduct=req.body;
    try {
        const product=new ProductPurchase({purchaseProduct})
        if(!product){
            return res.status(400).json({
                status:400,
                message:"Not Product Added..."
            })

        }

        const parchased=await product.save();

        res.status(201).json({
            status:201,
            message:"The Purchase Product Detail is:",
            detail:parchased
        })

        
    } catch (error) {
        console.log("Error in add purchased Product is :",error)
        return res.status(500).json({
            message:"Server side Error",
            err:error
        })
        
    }
}
export const viewPurchaseProductbyId=async(req,res,next)=>{
    const {id}=req.params
    try {
        const parchasedProductDetail=await ProductPurchase.findById(id);
        if(!parchasedProductDetail){
            return res.status(400).json({
                status:400,
                message:'There are not any Parchased Product match with this id: ${id}'
            })
        }
        res.status(200).json({
            status:200,
            message:'The Product detail with id: ${id}',
            detail:parchasedProductDetail

        })
        
    } catch (error) {
        console.log("Error in add purchased Product is :",error)
        return res.status(500).json({
            message:"Server side Error",
            err:error
        })
        
    }
}
export const viewAllPurchaseProduct=async(req,res,next)=>{
    try {
        const allParchasedProduct=await ProductPurchase.find();
        if(!allParchasedProduct){
            return res.status(400).json({
                status:400,
                message:"There are no parchased Product in Data base so kindly Purchase some product "
            })
        }
        res.status(200).json({
            status:200,
            message:"Purchase Product are:",
            detail:allParchasedProduct
        })
        
    } catch (error) {
        console.log("Error in add purchased Product is :",error)
        return res.status(500).json({
            message:"Server side Error",
            err:error
        })
        
    }
}
export const deletePurchaseProduct=async(req,res,next)=>{
    const {id}=req.params;
    try {
        const deletePurchaseProduct=await ProductPurchase.findByIdAndDelete(id);
        res.status(200).json({
            status:200,
            message: 'Successfully deleted the Purchased Product which id is: ${id}',
            detail:deletePurchaseProduct
        })
        
    } catch (error) {
        console.log("Error in add purchased Product is :",error)
        return res.status(500).json({
            message:"Server side Error",
            err:error
        })
        
    }
}
export const UpdatePurchaseProduct=async(req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}