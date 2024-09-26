import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import kerman from '../Image/kerman.png'
import antep from '../Image/antep.png';
import fando from '../Image/fando.png';
import bronte from '../Image/bronte.png';
import kale from '../Image/kale.png';
import badami from '../Image/badami.png';
import Akbari from '../Image/akbari.png';
import red from '../Image/redpista.png';
import { useNavigate } from 'react-router-dom';


const pistachioTypes = [
  {
    id: 53,
    price:40,
    name: 'Kerman Pistachio',
    image: kerman,
    description: 'Kerman pistachios are known for their large size, creamy texture, and rich flavor, making them a popular variety.',
  },
  {
    id: 54,
    price:40,
    name: 'Turkish Antep Pistachio',
    image: antep,
    description: 'Turkish Antep pistachios are smaller with a strong flavor and are often used in Turkish desserts like baklava.',
  },
  {
    id: 55,
    price:40,
    name: 'Iranian Fandoghi Pistachio',
    image: fando,
    description: 'Iranian Fandoghi pistachios are round and smaller, with a distinctive flavor that is popular in the Middle East.',
  },
  {
    id: 56,
    price:40,
    name: 'Bronte Pistachio',
    image: bronte,
    description: 'Bronte pistachios are grown in Sicily and are prized for their unique, vibrant green color and intense flavor.',
  },
  {
    id: 57,
    price:40,
    name: 'Kalehghouchi Pistachio',
    image: kale,
    description: 'Kalehghouchi pistachios are large and round, known for their open shells and rich taste.',
  },
  {
    id: 58,
    price:40,
    name: 'Badami Pistachio',
    image: badami,
    description: 'Badami pistachios are long and thin, often used in Indian and Middle Eastern cuisines for their distinct flavor.',
  },
  {
    id: 59,
    price:40,
    name: 'Akbari Pistachio',
    image: Akbari,
    description: 'Akbari pistachios are long and large, with a smooth texture and mild, buttery flavor.',
  },
  {
    id: 60,
    price:40,
    name: 'Red Pistachio',
    image: red,
    description: 'Red pistachios are dyed with a bright red color and have a crunchy texture, making them popular as a snack.',
  },
];



const CashewCards = () => {

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };


  return (
    <Grid container spacing={2} sx={{mt:12}}>
      {pistachioTypes.map((pistachio) => (
        <Grid item xs={12} sm={6} md={3} key={pistachio.id}>
          <Card

            onClick={() => handleCardClick(pistachio)}

            sx={{
              height: 400,
              cursor: 'pointer',
              // boxShadow:'2px 2px 2px 2px gray',
              boxShadow:5,
            }}>
            <CardMedia
              component="img"
              height="200"
              width={100}
              image={pistachio.image}
              alt={pistachio.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pistachio.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pistachio.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CashewCards;
