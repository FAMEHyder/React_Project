import User from '../models/user.model.js';

// Add to Wishlist
export const addWishlist = async (req, res, next) => {
    const { userId, productId } = req.params;

    try {
        const updateUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { wishList: productId } }, // Adds productId only if it's not already in the array
            { new: true }
        );
        
        if (!updateUser) {
            return res.status(404).json({
                status: 404,
                message: "User not Found",
            });
        }
        
        res.status(201).json({
            status: 201,
            message: "Wishlist added successfully",
            userDetail: updateUser,
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: 500,
            message: "Server side error",
            err: error.message,
        });
    }
};

// Remove from Wishlist
export const removeWishlist = async (req, res, next) => {
    const { userId, productId } = req.params;

    try {
        const deleteWishList = await User.findByIdAndUpdate(
            userId,
            { $pull: { wishList: productId } }, // Removes productId from the array
            { new: true }
        );

        if (!deleteWishList) {
            return res.status(404).json({
                status: 404,
                message: "User not Found",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Wishlist removed successfully",
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: 500,
            message: "Server side error",
            err: error.message,
        });
    }
};

// View Wishlist
export const getWishlist = async (req, res, next) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).populate('wishList'); // Use populate if wishList contains product references
        
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "User not Found",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Wishlist fetched successfully",
            wishList: user.wishList,
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: 500,
            message: "Server side error",
            err: error.message,
        });
    }
};
