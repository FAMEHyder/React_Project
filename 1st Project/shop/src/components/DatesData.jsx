import { Grid, Card, CardContent, CardMedia, Typography ,Box} from '@mui/material';
import medjol from '../Image/medjol.png';
import noor from '../Image/noor.png';
import barhi from '../Image/barhi.png';
import ajwa from '../Image/ajwa.png'
import zahidi from '../Image/zahidi.png';
import khudri from '../Image/khudri.png';
import halwi from '../Image/halwi.png';
import sukkari from '../Image/sukkari.png';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const dateVarieties = [
  {
    id: 33,
    price:50,
    name: 'Medjool',
    rating: 4.2,
    image: medjol, 
    description: 'Large, soft, and rich in flavor, Medjool dates are known as the "king of dates".',
  },
  {
    id: 34,
    price:50,
    rating: 4.4,
    name: 'Deglet Noor',
    image: noor,
    description: 'Deglet Noor dates are known for their semi-dry texture and mild sweetness, making them one of the most popular date varieties in the world. Their firmness and delicate flavor allow them to be versatile in both sweet and savory dishes. They are often used in cooking, baking, and as a snack. Because they aren t overly sticky or too sweet, they are great for stuffing, chopping into salads, blending into smoothies, or incorporating into recipes like date bars and energy bites.',
  },
  {
    id: 35,
    price:50,
    name: 'Barhi',
    rating: 3.1,
    image: barhi,
    description: 'Soft, chewy, and very sweet, Barhi dates are often enjoyed fresh or at the yellow stage.',
  },
  {
    id: 36,
    price:50,
    name: 'Ajwa',
    image: ajwa,
    rating: 2.1,
    description: 'Rich in flavor and soft in texture, Ajwa dates are famous for their cultural and religious significance.',
  },
  {
    id: 37,
    price:50,
    name: 'Zahidi',
    rating: 1.1,
    image: zahidi,
    description: 'Zahidi dates are semi-dry, mildly sweet, and commonly used for making date sugar or pastes.',
  },
  {
    id: 38,
    price:50,
    name: 'Khudri',
    rating: 3.5,
    image: khudri,
    description: 'Dark brown and medium-sweet, Khudri dates are often eaten as a snack or used in dishes.',
  },
  {
    id: 39,
    price:50,
    name: 'Halawi',
    rating: 4.1,
    image: halwi,
    description: 'Sweet and soft with a caramel-like taste, Halawi dates are a perfect treat.',
  },
  {
    id: 40,
    price:50,
    name: 'Sukkari',
    rating: 4.6,
    image: sukkari,
    description: 'Known for their buttery texture and extreme sweetness, Sukkari dates are popular in the Middle East.',
  },
];

const DateCards = () => {

  const navigate = useNavigate();
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
        {dateVarieties.map((Dates) => (
          <Box key={Dates.id} sx={{ padding: 1, }}>
            <Card
              sx={{
                height: 450,  // Adjust the height for both image and details
                display: 'flex',  // Display image and details side by side
                cursor: 'pointer',
                boxShadow: 5,
              }}
              onClick={() => handleCardClick(Dates)}
            >
              {/* Left side: Image */}
              <CardMedia
                component="img"
                sx={{ width: 600 ,height:400, ml:30,borderRadius:'10px',mt:'30px' }}  // Fixed width for the image
                image={Dates.image}
                alt={Dates.name}
              />
 
              {/* Right side: Product details */}
              <CardContent sx={{ flex: 1,mt:'60px'  }}>
                <Typography variant="h5" gutterBottom>
                  {Dates.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {Dates.description}
                </Typography>
                <Typography variant="body2" color="blue">
                  Price: ${Dates.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${Dates.id}`}
                  value={Dates.rating}
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
        {dateVarieties.map((Dates) => (
          <Grid item xs={12} sm={6} md={3} key={Dates.id}>
            <Card
              onClick={() => handleCardClick(Dates)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
              }}
            >
              <CardMedia
                component="img"
                height="290"
                image={Dates.image}
                alt={Dates.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Dates.name}
                </Typography>
                <Typography variant="body1" color="blue">
                  Price: ${Dates.price.toFixed(2)}
                </Typography>
                <Rating
                  name={`rating-${Dates.id}`}
                  value={Dates.rating}
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

export default DateCards;