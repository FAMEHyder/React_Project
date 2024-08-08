import { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container, Box } from '@mui/material';

const Main = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {  }, []);
    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
      .then(response => response.json())
      .then(data => setShoes(data));


  return (
    <Container>
      <Grid container spacing={4}>
        {shoes.slice(0, 90).map((shoe) => (
          <Grid item key={shoe.id} xs={12} sm={6} md={4}>
            <Box sx={{ height: '100%' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', ':hover': { boxShadow: 6 } }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={shoe.image}
                  alt={shoe.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {shoe.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {shoe.description}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    ${shoe.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Address: Sat_Tara Shoping Mall Skardu
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                  <Button size="small" color="primary" variant = 'contained'>Buy Now</Button>
                  <Button size="small" color="primary" variant = 'contained' >View Details</Button>
                </Box>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
