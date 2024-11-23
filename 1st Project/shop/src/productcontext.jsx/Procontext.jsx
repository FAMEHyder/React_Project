import { create } from 'zustand';
import axios from 'axios';

export const useProductStore = create((set) => ({
  products: [],
  
  // Action to fetch products from backend with optional size (number) and color (string) query parameters
  fetchData : async () => {
    try {
    
      const response = await axios.get(`http://localhost:8000/product/`);
      set({ products: response.data });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },

  // Other actions if needed
  setProducts: (newProducts) => set({ products: newProducts }),

  
}));