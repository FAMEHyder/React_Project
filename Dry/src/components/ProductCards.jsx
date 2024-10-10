// src/components/ProductCards.js
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Rating,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, useParams } from 'react-router-dom';
import ProductData from '../data/ProductData'; // Ensure the correct path

const ProductCards = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams(); // Get the category from the URL

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  // Function to handle adding items to the cart
  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent triggering the card click event
    // Implement your add to cart logic here
    console.log(`Added ${product.name} to cart.`);
    // For example, you might use a context or Redux to manage cart state
  };

  // Filter products based on the selected category
  const filteredProducts = categoryName
    ? ProductData.filter(
        (product) =>
          product.Category.toLowerCase() === categoryName.toLowerCase()
      )
    : ProductData; // If no category is selected, show all products

  return (
    <Grid container spacing={2} sx={{ mt: 4, padding: 2 }}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              onClick={() => handleCardClick(product)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                  ${product.price.toFixed(2)}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Rating
                    name={`rating-${product.id}`}
                    value={product.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <IconButton
                    color="primary"
                    onClick={(e) => handleAddToCart(e, product)}
                    aria-label="add to cart"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ m: 2 }}>
          No products found in this category.
        </Typography>
      )}
    </Grid>
  );
};

export default ProductCards;
