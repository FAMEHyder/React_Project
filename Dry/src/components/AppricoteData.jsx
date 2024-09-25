import { Card, CardContent, CardMedia, Typography, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import chuli1 from '../Image/chuli1.png'
import chuli2 from '../Image/chuli2.png';
import chuli3 from '../Image/chuli3.png';
import chuli4 from '../Image/chuli4.png';
import chuli5 from '../Image/chuli5.png';
import chuli6 from '../Image/chuli6.png';
import chuli7 from '../Image/chuli7.png';
import chuli8 from '../Image/chuli8.png';
import chuli9 from '../Image/chuli9.png';
import chuli10 from '../Image/chuli10.png';
import chuli11 from '../Image/chuli11.png';
import chuli12 from '../Image/chuli12.png';

const cashewTypes = [
  { 
    id: 9,
    name: 'Moorpark Apricot',
    image: chuli1,
    description: 'Moorpark apricots are large, juicy, and known for their sweet, rich flavor. Perfect for fresh eating and preserves.',
  },
  { 
    id: 10,
    name: 'Tilton Apricot',
    image: chuli2,
    description: 'Tilton apricots have a tangy, sweet flavor and are commonly used for drying and cooking.',
  },
  { 
    id: 11,
    name: 'Perfection Apricot',
    image: chuli3,
    description: 'Perfection apricots are large with a firm texture and bright orange color, often used in fresh dishes.',
  },
  { 
    id: 12,
    name: 'Blenheim Apricot',
    image: chuli4,
    description: 'Blenheim apricots are sweet and juicy, ideal for both fresh consumption and drying.',
  },
  { 
    id: 13,
    name: 'Gold Kist Apricot',
    image: chuli5,
    description: 'Gold Kist apricots are early ripening with a sweet and slightly tart flavor, often enjoyed fresh.',
  },
  { 
    id: 14,
    name: 'Chinese/Mormon Apricot',
    image: chuli6,
    description: 'Chinese or Mormon apricots are small, hardy, and have a sweet, mild flavor, often grown in cooler climates.',
  },
  { 
    id: 15,
    name: 'Tomcot Apricot',
    image: chuli7,
    description: 'Tomcot apricots ripen early and are known for their vibrant color and balanced sweet-tart flavor.',
  },
  { 
    id: 16,
    name: 'Katy Apricot',
    image: chuli8,
    description: 'Katy apricots are large, sweet, and flavorful, commonly enjoyed fresh or in salads.',
  },
  { 
    id: 17,
    name: 'Royal Apricot',
    image: chuli9,
    description: 'Royal apricots have an intense flavor and are often used for canning and drying.',
  },
  { 
    id: 18,
    name: 'Puget Gold Apricot',
    image: chuli10,
    description: 'Puget Gold apricots thrive in cooler climates and are known for their sweet, delicious taste.',
  },
  { 
    id: 19,
    name: 'Autumn Glo Apricot',
    image: chuli11,
    description: 'Autumn Glo apricots ripen later in the season, with a juicy texture and rich, sweet flavor.',
  },
  { 
    id: 20,
    name: 'Harcot Apricot',
    image: chuli12,
    description: 'Harcot apricots are known for their excellent flavor and are perfect for fresh eating or making jams.',
  },
];


const CashewCards = () => {

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };
 
    return (
      <Grid container spacing={2}>
        {cashewTypes.map((cashew) => (
          <Grid item xs={12} sm={6} md={3} key={cashew.id}>
            <Card 
              onClick={() => handleCardClick(cashew.id)} // Make the card clickable

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
