import { Card, CardContent, CardMedia, Typography, Grid,Box } from '@mui/material';
import eng from "../Image/engwalnut.png";
import black from '../Image/blackwalnut.png';
import white from '../Image/whitewalnut.png';
import cali from '../Image/cali.png';
import chand from '../Image/chandlerwalnut.png';
import man from '../Image/marchanwalnut.png';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const WalnutTypes = [
  {
    id: 65,
    price:23,
    rating: 4.6,
    name: 'English Walnuts ',
    image: eng, 
    description: 'English walnuts are known for their mild flavor and thin, easy-to-crack shells.'
  },
  {
    id: 66,
    price:23,
    rating: 4.6,
    name: 'Black Walnuts',
    image: black,
    description: 'Black walnuts have a bold, earthy flavor with harder shells than English walnuts.'
  },
  {
    id: 67,
    price:23,
    rating: 4.6,
    name: 'White Walnuts (Butternuts)',
    image: white, 
    description: 'White walnuts are sweeter and oilier compared to other varieties, but harder to find.'
  },
  {
    id: 68,
    price:23,
    rating: 4.6,
    name: 'California Walnuts',
    image: cali,
    description: 'These walnuts are grown in California, known for their rich flavor and high quality.'
  },
  {
    id: 69,
    price:23,
    rating: 4.6,
    name: 'Chandler Walnuts',
    image: chand, 
    description: 'Chandler walnuts are a variant of English walnuts, valued for their light-colored kernel.'
  },
  {
    id: 70,
    price:23,
    rating: 4.6,
    name: 'Manchurian Walnuts',
    image: man, // Replace with a valid image URL
    description: 'Manchurian walnuts are smaller with thicker shells, able to grow in colder climates.'
  }
];

const WalnutCards = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show one item at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <Box sx={{ mt: 12 }}>
      {/* Slider */}
      <Slider {...sliderSettings}>
        {WalnutTypes.map((Walnut) => (
          <Box key={Walnut.id} sx={{ padding: 1, }}>
            <Card
              sx={{
                height: 450,  // Adjust the height for both image and details
                display: 'flex',  // Display image and details side by side
                cursor: 'pointer',
                boxShadow: 5,
              }}
              onClick={() => handleCardClick(Walnut)}
            >
              {/* Left side: Image */}
              <CardMedia
                component="img"
                sx={{ width: 600 ,height:400, ml:30,borderRadius:'10px',mt:'30px' }}  // Fixed width for the image
                image={Walnut.image}
                alt={Walnut.name}
              />
 
              {/* Right side: Product details */}
              <CardContent sx={{ flex: 1,mt:'60px'  }}>
                <Typography variant="h5" gutterBottom>
                  {Walnut.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {Walnut.description}
                </Typography>
                <Typography variant="body2" color="blue">
                  Price: ${Walnut.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${Walnut.id}`}
                  value={Walnut.rating}
                  readOnly
                  precision={0.1}
                />
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>

      {/* Card Grid (Optional, kept as is) */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {WalnutTypes.map((Walnut) => (
          <Grid item xs={12} sm={6} md={3} key={Walnut.id}>
            <Card
              onClick={() => handleCardClick(Walnut)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
              }}
            >
              <CardMedia
                component="img"
                height="290"
                image={Walnut.image}
                alt={Walnut.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Walnut.name}
                </Typography>
                <Typography variant="body1" color="blue">
                  Price: ${Walnut.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${Walnut.id}`}
                  value={Walnut.rating}
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

export default WalnutCards;