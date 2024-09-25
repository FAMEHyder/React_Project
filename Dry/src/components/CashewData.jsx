import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
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

const cashewTypes = [
  {
    id: 21,
    name: 'W-180 (King of Cashews)',
    image: w180,
    description: 'W-180, known as the "King of Cashews," is the largest and highest quality cashew nut available.',
  },
  {
    id: 22,
    name: 'W-210 (Jumbo Cashews)',
    image: jambo,
    description: 'W-210 cashews are large, high-quality nuts, perfect for gourmet snacks and recipes.',
  },
  {
    id: 23,
    name: 'W-240',
    image: w240,
    description: 'W-240 is a popular size that offers a balance between size and affordability.',
  },
  {
    id: 24,
    name: 'W-320',
    image: w230,
    description: 'W-320 is one of the most common cashew grades, used widely in snacks and cooking.',
  },
  {
    id: 25,
    name: 'W-450',
    image: w450,
    description: 'W-450 cashews are smaller and more affordable, often used in bulk or recipes.',
  },
  {
    id: 26,
    name: 'Splits',
    image: splites,
    description: 'Splits are naturally split cashews, often used in cooking and baking.',
  },
  {
    id: 27,
    name: 'Butts',
    image: butts,
    description: 'Cashew butts are the bottom parts of the nut, used in cooking and for cashew products.',
  },
  {
    id: 28,
    name: 'Pieces',
    image: pieces,
    description: 'Pieces are smaller fragments used in various recipes, including sweets and snacks.',
  },
  {
    id: 29,
    name: 'Baby Bits',
    image: babybits,
    description: 'Baby Bits are tiny fragments of cashews, often used in industrial applications or for making cashew flour.',
  },
  {
    id: 30,
    name: 'Roasted Cashews',
    image: roasted,
    description: 'Roasted cashews have a rich flavor, enhanced by roasting. Available salted or unsalted.',
  },
  {
    id: 31,
    name: 'Salted Cashews',
    image: flavor,
    description: 'Salted cashews are roasted and salted for flavor, making them a popular snack.',
  },
  {
    id: 32,
    name: 'Flavored Cashews',
    image: fla,
    description: 'Flavored cashews are coated or mixed with various spices or sweeteners like honey, chili, or garlic.',
  },
];

const CashewCards = () => {

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  return (
    <Grid container spacing={2} sx={{mt:10}}>
      {cashewTypes.map((cashew) => (
        <Grid item xs={12} sm={6} md={3} key={cashew.id}>
          <Card
            onClick={() => handleCardClick(cashew)} // Make the card clickable

            sx={{
              height: 400,
              cursor: 'pointer',

            }}>
            <CardMedia
              component="img"
              height="200"
              width={100}
              image={cashew.image}
              alt={cashew.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cashew.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cashew.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CashewCards;
