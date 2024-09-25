import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import medjol from '../Image/medjol.png';
import noor from '../Image/noor.png';
import barhi from '../Image/barhi.png';
import ajwa from '../Image/ajwa.png'
import zahidi from '../Image/zahidi.png';
import khudri from '../Image/khudri.png';
import halwi from '../Image/halwi.png';
import sukkari from '../Image/sukkari.png';
import { useNavigate } from 'react-router-dom';

const dateVarieties = [
  {
    id: 33,
    price:50,
    name: 'Medjool',
    image: medjol, // Replace with actual image URLs
    description: 'Large, soft, and rich in flavor, Medjool dates are known as the "king of dates".',
  },
  {
    id: 34,
    price:50,
    name: 'Deglet Noor',
    image: noor,
    description: 'Semi-dry with a mild sweetness, Deglet Noor dates are versatile and often used in cooking.',
  },
  {
    id: 35,
    price:50,
    name: 'Barhi',
    image: barhi,
    description: 'Soft, chewy, and very sweet, Barhi dates are often enjoyed fresh or at the yellow stage.',
  },
  {
    id: 36,
    price:50,
    name: 'Ajwa',
    image: ajwa,
    description: 'Rich in flavor and soft in texture, Ajwa dates are famous for their cultural and religious significance.',
  },
  {
    id: 37,
    price:50,
    name: 'Zahidi',
    image: zahidi,
    description: 'Zahidi dates are semi-dry, mildly sweet, and commonly used for making date sugar or pastes.',
  },
  {
    id: 38,
    price:50,
    name: 'Khudri',
    image: khudri,
    description: 'Dark brown and medium-sweet, Khudri dates are often eaten as a snack or used in dishes.',
  },
  {
    id: 39,
    price:50,
    name: 'Halawi',
    image: halwi,
    description: 'Sweet and soft with a caramel-like taste, Halawi dates are a perfect treat.',
  },
  {
    id: 40,
    price:50,
    name: 'Sukkari',
    image: sukkari,
    description: 'Known for their buttery texture and extreme sweetness, Sukkari dates are popular in the Middle East.',
  },
];

const DateCards = () => {

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  return (
    <Grid container spacing={2}>
      {dateVarieties.map((date) => (
        <Grid item xs={12} sm={6} md={3} key={date.id}>
          <Card

            onClick={() => handleCardClick(date)}

            sx={{
              height: 400,
              cursor: 'pointer',
            }}
          >
            <CardMedia
              component="img"
              height="200"
              width={100}
              image={date.image}
              alt={date.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {date.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {date.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DateCards;
