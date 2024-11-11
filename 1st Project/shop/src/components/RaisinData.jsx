import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import sultana from '../Image/sultana.png';
import golden from '../Image/golden.png';
import black from '../Image/black.png';
import current from '../Image/current.png';
import flame from '../Image/flame.png';
import manoka from '../Image/manuka.png';
import green from '../Image/green.png';
import red from '../Image/red.png';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const RaisinTypes = [
  {
    id: 53,
    price: 30,
    rating: 4.2,

    name: 'Sultana Raisin',
    image: sultana,
    description: 'Sultana raisins are light yellow and known for their juicy and sweet flavor.',
  },
  {
    id: 54,
    price: 30,
    rating: 4.2,

    name: 'Golden Raisin',
    image: golden,
    description: 'Golden raisins are plumper and have a milder flavor compared to regular raisins.',
  },
  {
    id: 55,
    price: 30,
    rating: 4.2,

    name: 'Black Raisin',
    image: black,
    description: 'Black raisins are dark and have a sweet, tangy flavor, made from red or black seedless grapes.',
  },
  {
    id: 56,
    price: 30,
    rating: 4.2,

    name: 'Currant',
    image: current,
    description: 'Currants are small, dark raisins with a tart and intense flavor, often used in baking.',
  },
  {
    id: 57,
    price: 30,
    rating: 4.2,

    name: 'Flame Raisin',
    image: flame,
    description: 'Flame raisins are large, dark, and have a sweet, fruity flavor, often enjoyed as snacks.',
  },
  {
    id: 58,
    price: 30,
    rating: 4.2,

    name: 'Monukka Raisin',
    image: manoka,
    description: 'Monukka raisins are larger with a rich, sweet flavor and chewy texture.',
  },
  {
    id: 59,
    price: 30,
    rating: 4.2,

    name: 'Green Raisin',
    image: green,
    description: 'Green raisins are slightly tart and made from green grapes, retaining a greenish hue.',
  },
  {
    id: 60,
    price: 30,
    rating: 4.2,

    name: 'Red Raisin',
    image: red,
    description: 'Red raisins are made from red grapes and have a sweet flavor with a lighter red color.',
  },
];



const RaisinCards = () => {
  const navigate = useNavigate(); 

  // Function to handle card clicks and  to product details
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
        {RaisinTypes.map((Raisin) => (
          <Box key={Raisin.id} sx={{ padding: 1, }}>
            <Card
              sx={{
                height: 450,  // Adjust the height for both image and details
                display: 'flex',  // Display image and details side by side
                cursor: 'pointer',
                boxShadow: 5,
              }}
              onClick={() => handleCardClick(Raisin)}
            >
              {/* Left side: Image */}
              <CardMedia
                component="img"
                sx={{ width: 600 ,height:400, ml:30,borderRadius:'10px',mt:'30px' }}  // Fixed width for the image
                image={Raisin.image}
                alt={Raisin.name}
              />
 
              {/* Right side: Product details */}
              <CardContent sx={{ flex: 1,mt:'60px'  }}>
                <Typography variant="h5" gutterBottom>
                  {Raisin.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {Raisin.description}
                </Typography>
                <Typography variant="body2" color="blue">
                  Price: ${Raisin.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${Raisin.id}`}
                  value={Raisin.rating}
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
        {RaisinTypes.map((Raisin) => (
          <Grid item xs={12} sm={6} md={3} key={Raisin.id}>
            <Card
              onClick={() => handleCardClick(Raisin)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
              }}
            >
              <CardMedia
                component="img"
                height="290"
                image={Raisin.image}
                alt={Raisin.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Raisin.name}
                </Typography>
                <Typography variant="body1" color="blue">
                  Price: ${Raisin.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${Raisin.id}`}
                  value={Raisin.rating}
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
export default RaisinCards;
