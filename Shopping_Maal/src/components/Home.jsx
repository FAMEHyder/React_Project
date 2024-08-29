import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, AppBar, Toolbar, Button, Container, Skeleton } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all'); // New state for category
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
        filterProducts(data, category); // Apply filtering based on category
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filterProducts = (products, category) => {
    let filtered = products;

    if (category === 'shoes') {
      // Example filter for shoe products; adjust criteria as needed
      filtered = products.filter(product =>
        product.title.toLowerCase().includes('shoe') || 
        product.description.toLowerCase().includes('shoe')
      );
    }

    // Add more conditions for other categories if needed

    setFilteredProducts(filtered);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Product Store
          </Typography>
          <Button color="inherit" onClick={() => setCategory('jewelries')}>Jewelries</Button>
          <Button color="inherit" onClick={() => setCategory('womens-clothing')}>Cloths for Women</Button>
          <Button color="inherit" onClick={() => setCategory('mens-clothing')}>Cloths for Men</Button>
          <Button color="inherit" onClick={() => setCategory('shoes')}>Shoes</Button>
        </Toolbar>
      </AppBar>

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
            filteredProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card onClick={() => handleCardClick(product.id)} sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
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

      <footer>
        <Grid container spacing={2} sx={{ padding: 3 }}>
          <Grid item xs={12} md={4}>
            <div className="footer-card">
              <Typography variant="h6">About Us</Typography>
              <Typography variant="body2">Learn more about our company and mission.</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="footer-card">
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="body2">Get in touch with us for any inquiries.</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="footer-card">
              <Typography variant="h6">Join Us</Typography>
              <Typography variant="body2">Find out how you can be a part of our team.</Typography>
            </div>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
};

export default Home;
