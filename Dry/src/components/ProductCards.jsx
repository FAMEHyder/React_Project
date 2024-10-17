import { Card, CardContent, CardMedia, Typography, Grid, IconButton, Rating ,Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductData from '../components/ProductData'; // Make sure the correct path to ProductData is provided

const ProductCard = () => {
  // Group products by category
  const groupedProducts = ProductData.reduce((acc, product) => {
    if (!acc[product.Category]) {
      acc[product.Category] = [];
    }
    acc[product.Category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <Typography variant="h4" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={4}>
            {groupedProducts[category].map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Button>
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
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
