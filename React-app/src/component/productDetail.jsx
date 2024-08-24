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
    // Implement add to cart functionality here
    console.log(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    // Implement buy now functionality here
    console.log(`Proceed to buy ${product.title}!`);
  };

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h4">{product.title}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="h5">${product.price}</Typography>
          <Typography variant="body2">Category: {product.category}</Typography>
          <Typography variant="body2">Rating: {product.rating.rate} ({product.rating.count} reviews)</Typography>

          {/* Add buttons for Add to Cart and Buy Now */}
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ marginRight: 2 }}>
              Add to Cart
            </Button>
            <Button variant="contained" color="secondary" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
