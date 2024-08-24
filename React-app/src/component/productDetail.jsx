import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the product details!", error);
      });
  }, [id]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  const handleAddToCart = () => {
    console.log(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    console.log(`Proceed to buy ${product.title}!`);
  };

  return (
    <Container>
      <Card sx={{ mt: 4, p: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>{product.title}</Typography>
          <Typography variant="body1" gutterBottom>{product.description}</Typography>
          <Typography variant="h5" gutterBottom>${product.price}</Typography>
          <Typography variant="body2" gutterBottom>Category: {product.category}</Typography>
          <Typography variant="body2" gutterBottom>Rating: {product.rating.rate} ({product.rating.count} reviews)</Typography>

          {/* Buttons added here */}
          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" size="large" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="contained" color="secondary" size="large" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
