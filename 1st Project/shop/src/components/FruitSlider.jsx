import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductData from './ProductData'; // Assume this contains the data for the products

// Reusable component for each category slider
const CategorySlider = ({ category, data }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  const filteredData = data.filter((product) =>
    product.Category.toLowerCase() === category.toLowerCase()
  );

  // Slick carousel settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    pauseOnHover: true,

  };

  return (
    <div style={{ padding: '10px', textAlign: 'center', borderRadius:5 ,}}>
      
      <Typography variant="h6" component="div" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        All {category} products
      </Typography>
      <Slider {...sliderSettings} >
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <Box
              key={product.id}
              sx={{ padding: '10px', cursor: 'pointer',borderRadius:'10px' }}
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '800px', 
                  height: '200px',
                  objectFit: 'cover', 
                  marginBottom: '10px',
                  
                }}
              />
              <Typography>{product.name}</Typography>
              <Typography style={{ fontWeight: 'bold' }}>${product.price}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No products available</Typography>
        )}
      </Slider>
    </div>
  );
};

// Layout for displaying multiple sliders
const ProductSlidersLayout = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <CategorySlider category="Almonds" data={ProductData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CategorySlider category="Dates" data={ProductData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CategorySlider category="Cashews" data={ProductData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CategorySlider category="Pistachios" data={ProductData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CategorySlider category="Walnuts" data={ProductData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CategorySlider category="Raisins" data={ProductData} />
      </Grid>
    </Grid>
  );
};

export default ProductSlidersLayout;
