import mongoose from "mongoose";

// Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    images: {
      type: [String], 
    },
    category: {
      type: String,
      trim: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
    },
    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
      default: null
    },
   
  },
  {
    timestamps: true
  }
);


// SubCategory Schema
const subCategorySchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      trim: true
    },
    
    weight: {
      type: String,
      trim: true
    },
    stock: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
    },
    sku: {
      type: String,  
      unique: true
    }
  },
  {
    timestamps: true
  }
);
// Export both models using named exports
const SubCategory = mongoose.model('SubCategory', subCategorySchema);
const Product = mongoose.model('Product', productSchema);

export { SubCategory, Product };