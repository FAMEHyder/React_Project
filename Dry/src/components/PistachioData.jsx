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

const cashewTypes = [
  { 
    id: 41,
    name: 'Moorpark Apricot',
    image: moorpark,
    description: 'Moorpark apricots are large, juicy, and known for their sweet, rich flavor. Perfect for fresh eating and preserves.',
  },
  { 
    id: 42,
    name: 'Tilton Apricot',
    image: tilton,
    description: 'Tilton apricots have a tangy, sweet flavor and are commonly used for drying and cooking.',
  },
  { 
    id: 43,
    name: 'Perfection Apricot',
    image: perfection,
    description: 'Perfection apricots are large with a firm texture and bright orange color, often used in fresh dishes.',
  },
  { 
    id: 44,
    name: 'Blenheim Apricot',
    image: blenheim,
    description: 'Blenheim apricots are sweet and juicy, ideal for both fresh consumption and drying.',
  },
  { 
    id: 45,
    name: 'Gold Kist Apricot',
    image: goldkist,
    description: 'Gold Kist apricots are early ripening with a sweet and slightly tart flavor, often enjoyed fresh.',
  },
  { 
    id: 46,
    name: 'Chinese/Mormon Apricot',
    image: chinese,
    description: 'Chinese or Mormon apricots are small, hardy, and have a sweet, mild flavor, often grown in cooler climates.',
  },
  { 
    id: 47,
    name: 'Tomcot Apricot',
    image: tomcot,
    description: 'Tomcot apricots ripen early and are known for their vibrant color and balanced sweet-tart flavor.',
  },
  { 
    id: 48,
    name: 'Katy Apricot',
    image: katy,
    description: 'Katy apricots are large, sweet, and flavorful, commonly enjoyed fresh or in salads.',
  },
  { 
    id: 49,
    name: 'Royal Apricot',
    image: royal,
    description: 'Royal apricots have an intense flavor and are often used for canning and drying.',
  },
  { 
    id: 50,
    name: 'Puget Gold Apricot',
    image: pugetgold,
    description: 'Puget Gold apricots thrive in cooler climates and are known for their sweet, delicious taste.',
  },
  { 
    id: 51,
    name: 'Autumn Glo Apricot',
    image: autumnglo,
    description: 'Autumn Glo apricots ripen later in the season, with a juicy texture and rich, sweet flavor.',
  },
  { 
    id: 52,
    name: 'Harcot Apricot',
    image: harcot,
    description: 'Harcot apricots are known for their excellent flavor and are perfect for fresh eating or making jams.',
  },
];


const CashewCards = () => {
 
    return (
      <Grid container spacing={2}>
        {cashewTypes.map((cashew) => (
          <Grid item xs={12} sm={6} md={3} key={cashew.id}>
            <Card
            sx={{
              height: 400,

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
