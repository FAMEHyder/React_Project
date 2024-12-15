// // controllers/cartController.js
// import  Cart from '../models/cart.model.js';

// // Add to Cart Controller
// export const addToCart = async (req, res) => {
//   try {
//     const { userId, productId } = req.params;
//     const {  quantity } = req.body;

//     // Find user's cart
//     let cart = await Cart.findOne({ userId }).populate("userId");
//     console.log(userId)
//     if (cart) {
//       // Check if product already exists in the cart
//       const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

//       if (productIndex > -1) {
//         // If product exists, update the quantity
//         cart.products[productIndex].quantity += quantity;
//       } else {
//         // If product doesn't exist, add it to the cart
//         cart.products.push({ productId, quantity });
//       }
//     } else {
//       // If no cart for the user, create a new one
//       cart = new Cart({
//         userId,
//         products: [{ productId, quantity }]
//       });
//     }

//     await cart.save();
//     res.status(200).json({ message: 'Product added to cart successfully', cart });

//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add product to cart', details: error.message });
//   }
// };


import Cart from '../models/cart.model.js';

// Add to Cart Controller
export const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    // Find user's cart
    let cart = await Cart.findOne({ userId }).populate("userId");

    if (cart) {
      // Check if product already exists in the cart
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

      if (productIndex > -1) {
        // If product exists, update the quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // If product doesn't exist, add it to the cart
        cart.products.push({ productId, quantity });
      }
    } else {
      // If no cart for the user, create a new one
      cart = new Cart({
        userId,
        products: [{ productId, quantity }]
      });
    }

    await cart.save();
    res.status(200).json({ message: 'Product added to cart successfully', cart });

  } catch (error) {
    res.status(500).json({ error: 'Failed to add product to cart', details: error.message });
  }
};

// Get Products from Cart Controller
export const getProductFromCart = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find user's cart and populate product details
    const cart = await Cart.findOne({ userId }).populate({
      path: 'products.productId',
      model: 'Product'  // Assume you have a Product model
    });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found for this user' });
    }

    res.status(200).json({ cart });

  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products from cart', details: error.message });
  }
};

// Delete Product from Cart Controller
export const deleteProductFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    // Find user's cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found for this user' });
    }

    // Find the product index and remove it
    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);
      await cart.save();
      res.status(200).json({ message: 'Product removed from cart successfully', cart });
    } else {
      res.status(404).json({ message: 'Product not found in cart' });
    }

  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product from cart', details: error.message });
  }
};
