import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Grid, Card, CardContent, CardMedia, Typography, Container, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CategoryComponent = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use useNavigate for routing

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  const handleCardClick = (id) => {
    // Navigate to the ProductDetails component with the product ID
    navigate(`/product/${id}`);
  };

  return (
    <Container>
      <main>
        <Grid container spacing={2} sx={{ padding: 3 }}>
          {loading ? (
            Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Skeleton variant="rectangular" width="100%" height={140} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Skeleton width="60%" />
                    <Skeleton width="40%" />
                    <Skeleton width="80%" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            products.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
                  onClick={() => handleCardClick(product.id)} // Handle click event
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: 'contain', width: '100%' }}
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" noWrap>{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </main>
    </Container>
  );
};

// Prop validation for the category prop
CategoryComponent.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryComponent;
