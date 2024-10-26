import { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Rating } from '@mui/material';
import Slider from 'react-slick';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AlmondCards = () => {
  const [almondProducts, setAlmondProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAlmondProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/product/');
        console.log('Your Response Data:', response.data); // Check the structure here
        let products =(response.data);
        // console.log( "your product at 0 is ",products[0]);
        // Check if the data is an array directly or nested
        console.log( "your product result is ",products.result);
        const nam = products.result;
        
        products = Array.isArray(nam) ? nam : response.data.products;
        console.log("product ka nam",products[0])
        // If `products` is defined and an array, filter for almonds
        const filteredAlmonds = products && Array.isArray(products)
        ? products.filter(product => product.category === 'Almonds')
        : [];
        
        console.log("array main agia hay ",filteredAlmonds)
        setAlmondProducts(filteredAlmonds);
      } catch (error) {
        console.error('Error fetching almond products:', error);
      }
    };
  
    fetchAlmondProducts();
  }, []);
  
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <Box sx={{ mt: 12 }}>
      {/* Slider */}
      <Slider {...sliderSettings}>
        {almondProducts.map((almond) => (
          <Box key={almond.Id} sx={{ padding: 1 }}>
            <Card
              sx={{
                height: 450,
                display: 'flex',
                cursor: 'pointer',
                boxShadow: 5,
              }}
              onClick={() => handleCardClick(almond)}
            >
              {/* Left side: Image */}
              <CardMedia
                component="img"
                sx={{ width: 600, height: 400, ml: 30, borderRadius: '10px', mt: '30px' }}
                image={almond.image}
                alt={almond.name}
              />
              {/* Right side: Product details */}
              <CardContent sx={{ flex: 1, mt: '60px' }}>
                <Typography variant="h5" gutterBottom>
                  {almond.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {almond.description}
                </Typography>
                <Typography variant="body2" color="blue">
                  Price: ${almond.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Stock: {almond.stock} | Brand: {almond.brand} | Weight: {almond.weight}g
                </Typography>
                <Rating
                  name={`rating-${almond.sku}`}
                  value={almond.rating || 0}
                  readOnly
                  precision={0.1}
                />
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>

      {/* Card Grid */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {almondProducts.map((almond) => (
          <Grid item xs={12} sm={6} md={3} key={almond.sku}>
            <Card
              onClick={() => handleCardClick(almond)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
              }}
            >
              <CardMedia
                component="img"
                height="290"
                image={almond.image}
                alt={almond.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {almond.name}
                </Typography>
                <Typography variant="body1" color="blue">
                  Price: ${almond.price}
                </Typography>
                <Rating
                  name={`rating-${almond.sku}`}
                  value={almond.rating || 0}
                  readOnly
                  precision={0.1}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AlmondCards;
