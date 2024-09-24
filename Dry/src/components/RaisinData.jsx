import { Card, CardContent, CardMedia, Typography, Grid} from '@mui/material';
import tilton from '../Image/w180.png'
import moorpark from '../Image/jambo.png';
import perfection from '../Image/w240.png';
import blenheim from '../Image/w230.png';
import goldkist from '../Image/w450.png';
import chinese from '../Image/splites.png';
import tomcot from '../Image/butts.png';
import katy from '../Image/pieces.png';
import royal from '../Image/babybits.png';
import pugetgold from '../Image/roasted.png';
import autumnglo from '../Image/flavor.png';
import harcot from '../Image/flavor.png';

const raisinTypes = [
  { 
    id: 53,
    name: 'Sultana Raisin',
    image: moorpark,
    description: 'Sultana raisins are light yellow and known for their juicy and sweet flavor.',
  },
  { 
    id: 54,
    name: 'Golden Raisin',
    image: tilton,
    description: 'Golden raisins are plumper and have a milder flavor compared to regular raisins.',
  },
  { 
    id: 55,
    name: 'Black Raisin',
    image: perfection,
    description: 'Black raisins are dark and have a sweet, tangy flavor, made from red or black seedless grapes.',
  },
  { 
    id: 56,
    name: 'Currant',
    image: blenheim,
    description: 'Currants are small, dark raisins with a tart and intense flavor, often used in baking.',
  },
  { 
    id: 57,
    name: 'Flame Raisin',
    image: goldkist,
    description: 'Flame raisins are large, dark, and have a sweet, fruity flavor, often enjoyed as snacks.',
  },
  { 
    id: 58,
    name: 'Monukka Raisin',
    image: chinese,
    description: 'Monukka raisins are larger with a rich, sweet flavor and chewy texture.',
  },
  { 
    id: 59,
    name: 'Green Raisin',
    image: tomcot,
    description: 'Green raisins are slightly tart and made from green grapes, retaining a greenish hue.',
  },
  { 
    id: 60,
    name: 'Red Raisin',
    image: katy,
    description: 'Red raisins are made from red grapes and have a sweet flavor with a lighter red color.',
  },
];



const CashewCards = () => {
 
    return (
      <Grid container spacing={2}>
        {raisinTypes.map((raisin) => (
          <Grid item xs={12} sm={6} md={3} key={raisin.id}>
            <Card
            sx={{
              height: 400,

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
