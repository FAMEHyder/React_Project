import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import eng from "../Image/engwalnut.png";
import black from '../Image/blackwalnut.png';
import white from '../Image/whitewalnut.png';
import cali from '../Image/cali.png';
import chand from '../Image/chandlerwalnut.png';
import man from '../Image/marchanwalnut.png';

const walnutData = [
  { id:65,
    name: 'English Walnuts (Persian Walnuts)',
    image: eng, // Replace with a valid image URL
    description: 'English walnuts are known for their mild flavor and thin, easy-to-crack shells.'
  },
  { id:66,
    name: 'Black Walnuts',
    image: black, // Replace with a valid image URL
    description: 'Black walnuts have a bold, earthy flavor with harder shells than English walnuts.'
  },
  { id :67,
    name: 'White Walnuts (Butternuts)',
    image: white, // Replace with a valid image URL
    description: 'White walnuts are sweeter and oilier compared to other varieties, but harder to find.'
  },
  { id :68,
    name: 'Northern California Walnuts',
    image: cali, // Replace with a valid image URL
    description: 'These walnuts are grown in California, known for their rich flavor and high quality.'
  },
  {
    name: 'Chandler Walnuts',
    image: chand, // Replace with a valid image URL
    description: 'Chandler walnuts are a variant of English walnuts, valued for their light-colored kernel.'
  },
  {
    name: 'Manchurian Walnuts',
    image: man, // Replace with a valid image URL
    description: 'Manchurian walnuts are smaller with thicker shells, able to grow in colder climates.'
  }
];

const WalnutCards = () => {
  return (
    <Grid container spacing={2}>
      {walnutData.map((walnut) => (
        <Grid item xs={12} sm={6} md={3} key={walnut.id}>
          <Card  
          
          sx={{
              height: 400,

          }}>
            <CardMedia
              component="img"
              height="200"
              width={100}
              image={walnut.image}
              alt={walnut.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {walnut.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {walnut.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default WalnutCards;
