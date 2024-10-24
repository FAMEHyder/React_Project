import ProductPurchase from '../models/Purchase.model.js';

export const purchaseProduct = async (req, res) => {
    // Destructure the required details from the request body
    const { productDetail, shippingDetail, paymentDetail, others } = req.body;

    // Basic validation to ensure that productDetail is provided
    if (!productDetail || !shippingDetail || !paymentDetail) {
        return res.status(400).json({
            status: 400,
            message: "Product, shipping, and payment details are required."
        });
    }

    try {
        // Create a new ProductPurchase instance with the provided details
        const newProductPurchase = new ProductPurchase({
            productDetail, // Includes productname, productDescription, images, category
            shippingDetail, // Includes RecipientName, address, city, postalCode, etc.
            paymentDetail,  // Includes paymentMethod, cardNumber, CvvCode, etc.
            others          // Includes deliveryStatus, paymentDate, orderDate, etc.
        });

        // Save the new purchase record to the database
        const savedPurchase = await newProductPurchase.save();

        // Respond with success and the saved purchase details
        res.status(201).json({
            status: 201,
            message: "Product purchase added successfully.",
            data: savedPurchase
        });

    } catch (error) {
        // Catch and handle any errors during the process
        console.error("Error adding product purchase:", error);
        return res.status(500).json({
            status: 500,
            message: "Server error while adding the product purchase.",
            error: error.message
        });
    }
};


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
            message: 'The Product detail with id: ${id}',
            detail:parchasedProductDetail

        })
        
    } catch (error) {
        console.log("Error in add purchased Product is :",error)
        return res.status(500).json({
            message:"Server side basit Error",
            err:error
        })
        
    }
}
export const AllPurchaseProduct = async (req, res, next) => {
    try {
        // Fetch all purchased products
        const allPurchasedProducts = await ProductPurchase.find();
console.log("zeeshan;",AllPurchaseProduct);
        // Check if there are no products in the array
        if (!allPurchasedProducts || allPurchasedProducts.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "There are no purchased products in the database. Kindly purchase some products.",
            });
        }

        // Return the list of all purchased products
        res.status(200).json({
            status: 200,
            message: "Purchased products are:",
            detail: allPurchasedProducts,
        });
        
    } catch (error) {
        console.log("Error in fetching purchased products:", error);
        return res.status(500).json({
            message: "Server-side error",
            error: error.message,
        });
    }
};
  
export const deletePurchaseProduct=async(req,res,next)=>{
    const {id}=req.params;
    try {
        const deletePurchaseProduct=await ProductPurchase.findByIdAndDelete(id);
        res.status(200).json({
            status:200,
            message:'Successfully deleted the Purchased Product which id is: ${id}',
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