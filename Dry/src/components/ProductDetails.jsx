import { useParams } from 'react-router-dom';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import almondData from './AlmondData'; // import your data

const ProductDetails = () => {
  const { id } = useParams(); // Get product id from the URL
  const product = almondData.find((item) => item.id === parseInt(id)); // Find the clicked product
  const relatedProducts = almondData.filter((item) => item.id !== parseInt(id)); // Filter out related products

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.description}
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={product.picture}
          alt={product.name}
        />
      </Card>

      <Typography variant="h5" mt={5}>
        Related Products
      </Typography>
      <Grid container spacing={2}>
        {relatedProducts.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.picture}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductDetails;
