import { createContext, useContext, useState } from 'react';

// CartContext
const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Edit an item in the cart by ID
  const editItem = (updatedItem) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  // Delete an item from the cart by ID
  const deleteItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, editItem, deleteItem , clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
