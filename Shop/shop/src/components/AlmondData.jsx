import { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Rating, Skeleton, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Slider from 'react-slick';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../authContext/auth';
import { useProductStore } from '../productcontext.jsx/Procontext';

const AlmondCards = () => {
  const [almondProducts, setAlmondProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();
  const { userId, user } = useAuthStore();
  const { fetchData, products } = useProductStore();
  
  // Fetch product data on mount
  useEffect(() => {
    fetchData(); // Fetch all product data
  }, [fetchData]);

  useEffect(() => {
    const fetchAlmondProducts = async () => {
      try {
        // Filter almonds based on category
        const filteredAlmonds = Array.isArray(products.result)
          ? products.result.filter(product => product.category === 'Almonds')
          : [];
        setAlmondProducts(filteredAlmonds);

        // Initialize favorite status for each product
        const initialFavorites = filteredAlmonds.reduce((acc, product) => {
          acc[product._id] = false; // Default to not favorited
          return acc;
        }, {});
        setFavorites(initialFavorites);
      } catch (error) {
        console.error('Error fetching almond products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlmondProducts();
  }, [products]);

  // Toggle favorite status and sync with backend
  const handleFavoriteToggle = async (productId) => {
    const isFavorited = favorites[productId];
    if (!user) {
      alert('Login required!');
      navigate('/Signin');
      return;
    }

    try {
      if (isFavorited) {
        // Remove from favorites
        await axios.delete(`http://localhost:8000/wish/delWish/${userId}/${productId}`);
      } else {
        // Add to favorites
        await axios.post(`http://localhost:8000/wish/addWish/${userId}/${productId}`);
      }

      // Toggle favorite status in the local state
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [productId]: !isFavorited,
      }));
    } catch (error) {
      console.error(`Error ${isFavorited ? 'removing' : 'adding'} favorite:`, error);
    }
  };

  const handleCardClick = (product) => {
    navigate('/productDetails', { state: { product } });
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
          <Box key={almond?._id || index} sx={{ padding: 1 }}>
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
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 600, height: 400, ml: 30, borderRadius: '10px', mt: '30px' }}
                    image={`http://localhost:8000/${almond.images[0]?.replace(/\\/g, '/')}`}
                  />
                  <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                    <IconButton onClick={(e) => {
                      e.stopPropagation();
                      handleFavoriteToggle(almond._id);
                    }}>
                      {favorites[almond._id] ? <Favorite color="error" /> : <FavoriteBorder />}
                    </IconButton>
                  </Box>
                </Box>
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
                      name={`rating-${almond._id}`}
                      value={almond.subCategory.rating || 0}
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
          <Grid item xs={12} sm={6} md={3} key={almond?._id || index}>
            <Card
              onClick={() => !loading && handleCardClick(almond)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
                position: 'relative',
              }}
            >
              {loading ? (
                <Skeleton variant="rectangular" height={290} />
              ) : (
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="290"
                    image={almond.images[0]} // Assuming 'images' is an array
                    alt={almond.name}
                  />
                  <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                    <IconButton onClick={(e) => {
                      e.stopPropagation();
                      handleFavoriteToggle(almond._id);
                    }}>
                      {favorites[almond._id] ? <Favorite color="error" /> : <FavoriteBorder />}
                    </IconButton>
                  </Box>
                </Box>
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
                      name={`rating-${almond._id}`}
                      value={almond.subCategory.rating || 0}
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
