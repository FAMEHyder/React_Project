import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Skeleton, Button, Stack } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with the URL of your fake API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Grid container spacing={2} sx={{ padding: 3 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <Skeleton variant="rectangular" width="100%" height={300} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="90%" />
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={2} sx={{ padding: 3 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="auto"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: 'contain', width: '100%' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h6">${product.price}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
              <Button variant="contained" color="primary">Add to Cart</Button>
              <Button variant="contained" color="secondary">Buy Now</Button>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
