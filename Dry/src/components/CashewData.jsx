import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
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
    name: 'W-180 (King of Cashews)',
    image: w180,
    description: 'W-180, known as the "King of Cashews," is the largest and highest quality cashew nut available.',
  },
  {
    name: 'W-210 (Jumbo Cashews)',
    image: jambo,
    description: 'W-210 cashews are large, high-quality nuts, perfect for gourmet snacks and recipes.',
  },
  {
    name: 'W-240',
    image: w240,
    description: 'W-240 is a popular size that offers a balance between size and affordability.',
  },
  {
    name: 'W-320',
    image: w230,
    description: 'W-320 is one of the most common cashew grades, used widely in snacks and cooking.',
  },
  {
    name: 'W-450',
    image: w450,
    description: 'W-450 cashews are smaller and more affordable, often used in bulk or recipes.',
  },
  {
    name: 'Splits',
    image: splites,
    description: 'Splits are naturally split cashews, often used in cooking and baking.',
  },
  {
    name: 'Butts',
    image: butts,
    description: 'Cashew butts are the bottom parts of the nut, used in cooking and for cashew products.',
  },
  {
    name: 'Pieces',
    image: pieces,
    description: 'Pieces are smaller fragments used in various recipes, including sweets and snacks.',
  },
  {
    name: 'Baby Bits',
    image: babybits,
    description: 'Baby Bits are tiny fragments of cashews, often used in industrial applications or for making cashew flour.',
  },
  {
    name: 'Roasted Cashews',
    image: roasted,
    description: 'Roasted cashews have a rich flavor, enhanced by roasting. Available salted or unsalted.',
  },
  {
    name: 'Salted Cashews',
    image: flavor,
    description: 'Salted cashews are roasted and salted for flavor, making them a popular snack.',
  },
  {
    name: 'Flavored Cashews',
    image: fla,
    description: 'Flavored cashews are coated or mixed with various spices or sweeteners like honey, chili, or garlic.',
  },
];

const CashewCards = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {cashewTypes.map((cashew, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
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
    </Container>
  );
};

export default CashewCards;
