import { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Rating, Skeleton } from '@mui/material';
import Slider from 'react-slick';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AlmondCards = () => {
  const [almondProducts, setAlmondProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New state to track loading
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlmondProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/product/');
        let products = response.data;
        const filteredAlmonds = Array.isArray(products.result)
          ? products.result.filter(product => product.category === 'Almonds')
          : [];
        setAlmondProducts(filteredAlmonds);
      } catch (error) {
        console.error('Error fetching almond products:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
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
        {(loading ? Array.from(new Array(3)) : almondProducts).map((almond, index) => (
          <Box key={almond?.Id || index} sx={{ padding: 1 }}>
            <Card
              sx={{
                height: 450,
                display: 'flex',
                cursor: 'pointer',
                boxShadow: 5,
              }}
              onClick={() => !loading && handleCardClick(almond)}
            >
              {/* Left side: Image */}
              {loading ? (
                <Skeleton variant="rectangular" sx={{ width: 600, height: 400, ml: 30, borderRadius: '10px', mt: '30px' }} />
              ) : (
                <CardMedia
                  component="img"
                  sx={{ width: 600, height: 400, ml: 30, borderRadius: '10px', mt: '30px' }}
                  image={almond.image}
                  alt={almond.name}
                />
              )}
              
              {/* Right side: Product details */}
              <CardContent sx={{ flex: 1, mt: '60px' }}>
                {loading ? (
                  <>
                    <Skeleton variant="text" sx={{ fontSize: '1.5rem', width: '80%' }} />
                    <Skeleton variant="text" sx={{ width: '90%' }} />
                    <Skeleton variant="text" sx={{ width: '50%', mb: 2 }} />
                    <Skeleton variant="text" sx={{ width: '30%' }} />
                  </>
                ) : (
                  <>
                    <Typography variant="h5" gutterBottom>
                      {almond.name}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {almond.description}
                    </Typography>
                    <Typography variant="body2" color="blue">
                      Price: ${almond.subCategory.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Stock: {almond.subCategory.stock} kg | Brand: {almond.subCategory.brand} | Weight: {almond.subCategory.weight}g
                    </Typography>
                    <Rating
                      name={`rating-${almond.sku}`}
                      value={almond.rating || 0}
                      readOnly
                      precision={0.1}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>

      {/* Card Grid */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {(loading ? Array.from(new Array(8)) : almondProducts).map((almond, index) => (
          <Grid item xs={12} sm={6} md={3} key={almond?.sku || index}>
            <Card
              onClick={() => !loading && handleCardClick(almond)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
              }}
            >
              {loading ? (
                <Skeleton variant="rectangular" height={290} />
              ) : (
                <CardMedia
                  component="img"
                  height="290"
                  image={almond.image}
                  alt={almond.name}
                />
              )}
              <CardContent>
                {loading ? (
                  <>
                    <Skeleton variant="text" sx={{ fontSize: '1.25rem', width: '80%' }} />
                    <Skeleton variant="text" sx={{ width: '60%' }} />
                  </>
                ) : (
                  <>
                    <Typography gutterBottom variant="h5" component="div">
                      {almond.name}
                    </Typography>
                    <Typography variant="body1" color="blue">
                      Price: ${almond.subCategory.price}
                    </Typography>
                    <Rating
                      name={`rating-${almond.sku}`}
                      value={almond.rating || 0}
                      readOnly
                      precision={0.1}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AlmondCards;
