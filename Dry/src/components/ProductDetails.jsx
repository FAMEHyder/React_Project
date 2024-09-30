import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useCart } from './CartContext'; // Import the custom Cart hook

const ProductDetails = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the addToCart function from CartContext

  const location = useLocation();
  const { product } = location.state || {}; // Access product data from location state

  if (!product) {
    return <Typography variant="h6" align="center">No product details available</Typography>;
  }

  const handleclick = (path) => {
    navigate(path);
  };

  const handlecartclick = () => {
    addToCart(product); // Add product to cart
    alert('Added to cart successfully');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20, boxShadow: 5 }}>
      <Card>
        <Grid container spacing={2}>
          {/* Product Image */}
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              height="400"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'contain' }}
            />
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} sm={6}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>

              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>

              <Typography variant="h6" color="primary" gutterBottom>
                Price: ${product.price}
              </Typography>

              {/* Buttons for actions */}
              <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handlecartclick}>
                Add to Cart
              </Button>
              <Button variant="contained" color="secondary" onClick={() => handleclick('/OrderForm')}>
                Buy Now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ProductDetails;
