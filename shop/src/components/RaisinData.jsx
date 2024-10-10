import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import sultana from '../Image/sultana.png';
import golden from '../Image/golden.png';
import black from '../Image/black.png';
import current from '../Image/current.png';
import flame from '../Image/flame.png';
import manoka from '../Image/manuka.png';
import green from '../Image/green.png';
import red from '../Image/red.png';
import { useNavigate } from 'react-router-dom';

const raisinTypes = [
  {
    id: 53,
    price:30,
    name: 'Sultana Raisin',
    image: sultana,
    description: 'Sultana raisins are light yellow and known for their juicy and sweet flavor.',
  },
  {
    id: 54,
    price:30,
    name: 'Golden Raisin',
    image: golden,
    description: 'Golden raisins are plumper and have a milder flavor compared to regular raisins.',
  },
  {
    id: 55,
    price:30,
    name: 'Black Raisin',
    image: black,
    description: 'Black raisins are dark and have a sweet, tangy flavor, made from red or black seedless grapes.',
  },
  {
    id: 56,
    price:30,
    name: 'Currant',
    image: current,
    description: 'Currants are small, dark raisins with a tart and intense flavor, often used in baking.',
  },
  {
    id: 57,
    price:30,
    name: 'Flame Raisin',
    image: flame,
    description: 'Flame raisins are large, dark, and have a sweet, fruity flavor, often enjoyed as snacks.',
  },
  {
    id: 58,
    price:30,
    name: 'Monukka Raisin',
    image: manoka,
    description: 'Monukka raisins are larger with a rich, sweet flavor and chewy texture.',
  },
  {
    id: 59,
    price:30,
    name: 'Green Raisin',
    image: green,
    description: 'Green raisins are slightly tart and made from green grapes, retaining a greenish hue.',
  },
  {
    id: 60,
    price:30,
    name: 'Red Raisin',
    image: red,
    description: 'Red raisins are made from red grapes and have a sweet flavor with a lighter red color.',
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
      {raisinTypes.map((raisin) => (
        <Grid item xs={12} sm={6} md={3} key={raisin.id}>
          <Card
            onClick={() => handleCardClick(raisin)}

            sx={{
              height: 400,
              // boxShadow:'2px 2px 2px 2px gray',
              boxShadow:5,

              cursor: 'pointer',

            }}>
            <CardMedia
              component="img"
              height="200"
              width={100}
              image={raisin.image}
              alt={raisin.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {raisin.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {raisin.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CashewCards;
