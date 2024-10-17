import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductData from '../components/ProductData';
import Navbar from './Navbar'; // Import the Navbar component

const ProductCard = () => {
  // State to keep track of selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Group products by category
  const groupedProducts = ProductData.reduce((acc, product) => {
    if (!acc[product.Category]) {
      acc[product.Category] = [];
    }
    acc[product.Category].push(product);
    return acc;
  }, {});

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' ? ProductData : groupedProducts[selectedCategory];

  return (
    <div>
      {/* Render Navbar component and pass the category change handler */}
      <Navbar onCategoryChange={(category) => setSelectedCategory(category)} />

      {/* Display products based on selected category */}
      <Typography variant="h4" gutterBottom>
        {selectedCategory === 'All' ? 'All Products' : selectedCategory}
      </Typography>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Rating value={product.rating} readOnly precision={0.5} />
                <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                  ${product.price}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <IconButton color="primary">
                    <ShoppingCartIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCard;
