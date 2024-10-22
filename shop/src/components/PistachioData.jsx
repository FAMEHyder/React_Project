import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import kerman from '../Image/kerman.png'
import antep from '../Image/antep.png';
import fando from '../Image/fando.png';
import bronte from '../Image/bronte.png';
import kale from '../Image/kale.png';
import badami from '../Image/badami.png';
import Akbari from '../Image/akbari.png';
import red from '../Image/redpista.png';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const PistachioTypes = [
  {
    id: 53,
    price: 40,
    rating: 3.5,

    name: 'Kerman Pistachio',
    image: kerman,
    description: 'Kerman pistachios are known for their large size, creamy texture, and rich flavor, making them a popular variety.',
  },
  {
    id: 54,
    price: 40,
    rating: 3.5,

    name: 'Turkish Antep Pistachio',
    image: antep,
    description: 'Turkish Antep pistachios are smaller with a strong flavor and are often used in Turkish desserts like baklava.',
  },
  {
    id: 55,
    price: 40,
    rating: 3.5,

    name: 'Iranian Fandoghi Pistachio',
    image: fando,
    description: 'Iranian Fandoghi pistachios are round and smaller, with a distinctive flavor that is popular in the Middle East.',
  },
  {
    id: 56,
    price: 40,
    rating: 3.5,

    name: 'Bronte Pistachio',
    image: bronte,
    description: 'Bronte pistachios are grown in Sicily and are prized for their unique, vibrant green color and intense flavor.',
  },
  {
    id: 57,
    price: 40,
    rating: 3.5,

    name: 'Kalehghouchi Pistachio',
    image: kale,
    description: 'Kalehghouchi pistachios are large and round, known for their open shells and rich taste.',
  },
  {
    id: 58,
    price: 40,
    rating: 3.5,

    name: 'Badami Pistachio',
    image: badami,
    description: 'Badami pistachios are long and thin, often used in Indian and Middle Eastern cuisines for their distinct flavor.',
  },
  {
    id: 59,
    price: 40,
    rating: 3.5,

    name: 'Akbari Pistachio',
    image: Akbari,
    description: 'Akbari pistachios are long and large, with a smooth texture and mild, buttery flavor.',
  },
  {
    id: 60,
    price: 40,
    rating: 3.5,

    name: 'Red Pistachio',
    image: red,
    description: 'Red pistachios are dyed with a bright red color and have a crunchy texture, making them popular as a snack.',
  },
];



const PistachioCards = () => {

  const navigate = useNavigate();

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
        {PistachioTypes.map((Pistachio) => (
          <Box key={Pistachio.id} sx={{ padding: 1, }}>
            <Card
              sx={{
                height: 450,  
                display: 'flex',  
                cursor: 'pointer',
                boxShadow: 5,
              }}
              onClick={() => handleCardClick(Pistachio)}
            >
              {/* Left side: Image */}
              <CardMedia
                component="img"
                sx={{ width: 600 ,height:400, ml:30,borderRadius:'10px',mt:'30px' }}  // Fixed width for the image
                image={Pistachio.image}
                alt={Pistachio.name}
              />
 
              {/* Right side: Product details */}
              <CardContent sx={{ flex: 1,mt:'60px'  }}>
                <Typography variant="h5" gutterBottom>
                  {Pistachio.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {Pistachio.description}
                </Typography>
                <Typography variant="body2" color="blue">
                  Price: ${Pistachio.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${Pistachio.id}`}
                  value={Pistachio.rating}
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
        {PistachioTypes.map((Pistachio) => (
          <Grid item xs={12} sm={6} md={3} key={Pistachio.id}>
            <Card
              onClick={() => handleCardClick(Pistachio)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
              }}
            >
              <CardMedia
                component="img"
                height="290"
                image={Pistachio.image}
                alt={Pistachio.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Pistachio.name}
                </Typography>
                <Typography variant="body1" color="blue">
                  Price: ${Pistachio.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${Pistachio.id}`}
                  value={Pistachio.rating}
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

export default PistachioCards;
