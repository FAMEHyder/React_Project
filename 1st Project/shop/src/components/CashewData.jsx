import { Card, CardContent, CardMedia, Typography, Grid,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import w180 from '../Image/w180.png'
import jambo from '../Image/jambo.png';
import w240 from '../Image/w240.png';
import w230 from '../Image/w230.png';
import w450 from '../Image/w450.png';
import splites from '../Image/splites.png';
import butts from '../Image/butts.png';
import pieces from '../Image/pieces.png';
import babybits from '../Image/babybits.png';
import roasted from '../Image/roasted.png';
import flavor from '../Image/flavor.png';
import fla from '../Image/flavor.png';
import { Rating } from '@mui/material'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const cashewTypes = [
  {
    id: 21,
    price:120,
    name: 'W-180 (King of Cashews)',
    image: w180,
    rating: 4.4,
    description: 'W-180, known as the "King of Cashews," is the largest and highest quality cashew nut available.',
  },
  {
    id: 22,
    price:120,
    name: 'W-210 (Jumbo Cashews)',
    image: jambo,
    rating: 3.9,
    description: 'W-210 cashews are large, high-quality nuts, perfect for gourmet snacks and recipes.',
  },
  {
    id: 23,
    price:120,
    name: 'W-240',
    image: w240,
    rating: 4.3,
    description: 'W-240 is a popular size that offers a balance between size and affordability.',
  },
  {
    id: 24,
    price:120,
    name: 'W-320',
    image: w230,
    rating: 3.1,
    description: 'W-320 is one of the most common cashew grades, used widely in snacks and cooking.',
  },
  {
    id: 25,
    price:120,
    name: 'W-450',
    image: w450,
    rating: 2.1,
    description: 'W-450 cashews are smaller and more affordable, often used in bulk or recipes.',
  },
  {
    id: 26,
    price:120,
    name: 'Splits',
    image: splites,
    rating: 4.1,
    description: 'Splits are naturally split cashews, often used in cooking and baking.',
  },
  {
    id: 27,
    price:120,
    name: 'Butts',
    image: butts,
    rating: 3.1,
    description: 'Cashew butts are the bottom parts of the nut, used in cooking and for cashew products.',
  },
  {
    id: 28,
    price:120,
    name: 'Pieces',
    image: pieces,
    rating: 4.1,
    description: 'Pieces are smaller fragments used in various recipes, including sweets and snacks.',
  },
  {
    id: 29,
    price:120,
    name: 'Baby Bits',
    image: babybits,
    rating: 4.1,
    description: 'Baby Bits are tiny fragments of cashews, often used in industrial applications or for making cashew flour.',
  },
  {
    id: 30,
    price:120,
    name: 'Roasted Cashews',
    image: roasted,
    rating: 4.7,
    description: 'Roasted cashews have a rich flavor, enhanced by roasting. Available salted or unsalted.',
  },
  {
    id: 31,
    price:120,
    name: 'Salted Cashews',
    image: flavor,
    rating: 3.1,
    description: 'Salted cashews are roasted and salted for flavor, making them a popular snack.',
  },
  {
    id: 32,
    price:120,
    name: 'Flavored Cashews',
    image: fla,
    rating: 3.5,
    description: 'Flavored cashews are coated or mixed with various spices or sweeteners like honey, chili, or garlic.',
  },
];

const CashewCards = () => {

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/replace`, { state: { product } });
  };
  // const handleCardClick = (product) => {
  //   navigate(`/productDetails`, { state: { product } });
  // };
  
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
        {cashewTypes.map((cashew) => (
          <Box key={cashew.id} sx={{ padding: 1, }}>
            <Card
              sx={{
                height: 450,  // Adjust the height for both image and details
                display: 'flex',  // Display image and details side by side
                cursor: 'pointer',
                boxShadow: 5,
              }}
              onClick={() => handleCardClick(cashew)}
            >
              {/* Left side: Image */}
              <CardMedia
                component="img"
                sx={{ width: 600 ,height:400, ml:30,borderRadius:'10px',mt:'30px' }}  // Fixed width for the image
                image={cashew.image}
                alt={cashew.name}
              />
 
              {/* Right side: Product details */}
              <CardContent sx={{ flex: 1,mt:'60px'  }}>
                <Typography variant="h5" gutterBottom>
                  {cashew.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {cashew.description}
                </Typography>
                <Typography variant="body2" color="blue">
                  Price: ${cashew.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${cashew.id}`}
                  value={cashew.rating}
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
        {cashewTypes.map((cashew) => (
          <Grid item xs={12} sm={6} md={3} key={cashew.id}>
            <Card
              onClick={() => handleCardClick(cashew)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
              }}
            >
              <CardMedia
                component="img"
                height="290"
                image={cashew.image}
                alt={cashew.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cashew.name}
                </Typography>
                <Typography variant="body1" color="blue">
                  Price: ${cashew.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${cashew.id}`}
                  value={cashew.rating}
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

export default CashewCards;