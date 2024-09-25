import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import eng from "../Image/engwalnut.png";
import black from '../Image/blackwalnut.png';
import white from '../Image/whitewalnut.png';
import cali from '../Image/cali.png';
import chand from '../Image/chandlerwalnut.png';
import man from '../Image/marchanwalnut.png';
import { useNavigate } from 'react-router-dom';
const walnutData = [
  {
    id: 65,
    price:23,
    name: 'English Walnuts (Persian Walnuts)',
    image: eng, // Replace with a valid image URL
    description: 'English walnuts are known for their mild flavor and thin, easy-to-crack shells.'
  },
  {
    id: 66,
    price:23,
    name: 'Black Walnuts',
    image: black, // Replace with a valid image URL
    description: 'Black walnuts have a bold, earthy flavor with harder shells than English walnuts.'
  },
  {
    id: 67,
    price:23,
    name: 'White Walnuts (Butternuts)',
    image: white, // Replace with a valid image URL
    description: 'White walnuts are sweeter and oilier compared to other varieties, but harder to find.'
  },
  {
    id: 68,
    price:23,
    name: 'Northern California Walnuts',
    image: cali, // Replace with a valid image URL
    description: 'These walnuts are grown in California, known for their rich flavor and high quality.'
  },
  {
    id: 69,
    price:23,
    name: 'Chandler Walnuts',
    image: chand, // Replace with a valid image URL
    description: 'Chandler walnuts are a variant of English walnuts, valued for their light-colored kernel.'
  },
  {
    id: 70,
    price:23,
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

  return (
    <Grid container spacing={2} sx={{mt:10}}>
      {walnutData.map((walnut) => (
        <Grid item xs={12} sm={6} md={3} key={walnut.id}>
          <Card
            onClick={() => handleCardClick(walnut)}

            sx={{
              height: 400,
              cursor: 'pointer',

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
