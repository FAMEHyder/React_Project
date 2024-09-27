import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import ProductDetailsTable from './ProductDetailsTable'; // Import the new table component

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {}; // Access product data from location state

  if (!product) {
    return <Typography variant="h6" align="center">No product details available</Typography>;
  }

  const handleClick = (path) => {
    navigate(path);
  };

  const handleCartClick = () => {
    alert('Added to cart successfully');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card sx={{ boxShadow: 5, mb: 4 }}>
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
              <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleCartClick}>
                Add to Cart
              </Button>
              <Button variant="contained" color="secondary" onClick={() => handleClick('/OrderForm')}>
                Buy Now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* Render the ProductDetailsTable component */}
      <ProductDetailsTable product={product} />
    </Container>
  );
};

export default ProductDetails;
