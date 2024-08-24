import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

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
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
