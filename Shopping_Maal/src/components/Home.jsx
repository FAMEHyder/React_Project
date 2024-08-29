import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, AppBar, Toolbar, Button, Container, Skeleton, Box } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container maxWidth='2g' sx={{ padding: 0 }}>
      <AppBar sx={{width:1350}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sat_Tara
          </Typography>
          <Button color="inherit" onClick={() => navigate('/jewelries')}>Jewelries</Button>
          <Button color="inherit" onClick={() => navigate('/womens-clothing')}>Cloths for Women</Button>
          <Button color="inherit" onClick={() => navigate('/mens-clothing')}>Cloths for Men</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: 600, // Adjust height as needed
       
        width:'100%',
          
          backgroundImage: 'url(https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM=)', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:0,
          margin:0,
        //   display: 'flex',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        //   color: 'white',
        //   textAlign: 'center',
        //   mb: 4
        }}
      >
      </Box>

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
