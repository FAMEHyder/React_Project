import { useLocation } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Access product data from location state

  if (!product) {
    return <Typography variant="h6" align="center">No product details available</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <Grid container spacing={2}>
          {/* Product Image */}
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              height="400"
              image={product.picture}
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
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Add to Cart
              </Button>
              <Button variant="outlined" color="secondary">
                Buy Now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* You can add related products or other details below */}
    </Container>
  );
};

export default ProductDetails;
