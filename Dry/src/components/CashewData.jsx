import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import w180 from '../Image/w180.png'
import jambo from '../Image/jambo.png';
import w240 from '../Image/w240.png';
import w230 from '../Image/w230.png';


// Sample data for cashew types
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
    image: 'path_to_w450_cashews_image.jpg',
    description: 'W-450 cashews are smaller and more affordable, often used in bulk or recipes.',
  },
  {
    name: 'Splits',
    image: 'path_to_splits_cashews_image.jpg',
    description: 'Splits are naturally split cashews, often used in cooking and baking.',
  },
  {
    name: 'Butts',
    image: 'path_to_butts_cashews_image.jpg',
    description: 'Cashew butts are the bottom parts of the nut, used in cooking and for cashew products.',
  },
  {
    name: 'Pieces',
    image: 'path_to_pieces_cashews_image.jpg',
    description: 'Pieces are smaller fragments used in various recipes, including sweets and snacks.',
  },
  {
    name: 'Baby Bits',
    image: 'path_to_baby_bits_cashews_image.jpg',
    description: 'Baby Bits are tiny fragments of cashews, often used in industrial applications or for making cashew flour.',
  },
  {
    name: 'Roasted Cashews',
    image: 'path_to_roasted_cashews_image.jpg',
    description: 'Roasted cashews have a rich flavor, enhanced by roasting. Available salted or unsalted.',
  },
  {
    name: 'Salted Cashews',
    image: 'path_to_salted_cashews_image.jpg',
    description: 'Salted cashews are roasted and salted for flavor, making them a popular snack.',
  },
  {
    name: 'Flavored Cashews',
    image: 'path_to_flavored_cashews_image.jpg',
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
