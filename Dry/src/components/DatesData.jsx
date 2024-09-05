import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import medjol from '../Image/medjol.png';
import noor from '../Image/noor.png';
import barhi from '../Image/barhi.png';
import ajwa from '../Image/ajwa.png'
import zahidi from '../Image/zahidi.png';
import khudri from '../Image/khudri.png';
import halwi from '../Image/halwi.png';
import sukkari from '../Image/sukkari.png'

const dateVarieties = [
  {
    name: 'Medjool',
    image: medjol, // Replace with actual image URLs
    description: 'Large, soft, and rich in flavor, Medjool dates are known as the "king of dates".',
  },
  {
    name: 'Deglet Noor',
    image: noor,
    description: 'Semi-dry with a mild sweetness, Deglet Noor dates are versatile and often used in cooking.',
  },
  {
    name: 'Barhi',
    image: barhi,
    description: 'Soft, chewy, and very sweet, Barhi dates are often enjoyed fresh or at the yellow stage.',
  },
  {
    name: 'Ajwa',
    image: ajwa,
    description: 'Rich in flavor and soft in texture, Ajwa dates are famous for their cultural and religious significance.',
  },
  {
    name: 'Zahidi',
    image: zahidi,
    description: 'Zahidi dates are semi-dry, mildly sweet, and commonly used for making date sugar or pastes.',
  },
  {
    name: 'Khudri',
    image: khudri,
    description: 'Dark brown and medium-sweet, Khudri dates are often eaten as a snack or used in dishes.',
  },
  {
    name: 'Halawi',
    image: halwi,
    description: 'Sweet and soft with a caramel-like taste, Halawi dates are a perfect treat.',
  },
  {
    name: 'Sukkari',
    image: sukkari,
    description: 'Known for their buttery texture and extreme sweetness, Sukkari dates are popular in the Middle East.',
  },
];

const DateCards = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {dateVarieties.map((date, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={date.image}
                alt={date.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
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
    </Container>
  );
};

export default DateCards;
