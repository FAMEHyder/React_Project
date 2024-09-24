import { Card, CardContent, CardMedia, Typography, Grid} from '@mui/material';
import tilton from '../Image/w180.png'
import moorpark from '../Image/jambo.png';
import perfection from '../Image/w240.png';
import blenheim from '../Image/w230.png';
import goldkist from '../Image/w450.png';
import chinese from '../Image/splites.png';
import tomcot from '../Image/butts.png';
import katy from '../Image/pieces.png';


const pistachioTypes = [
  { 
    id: 53,
    name: 'Kerman Pistachio',
    image: moorpark,
    description: 'Kerman pistachios are known for their large size, creamy texture, and rich flavor, making them a popular variety.',
  },
  { 
    id: 54,
    name: 'Turkish Antep Pistachio',
    image: tilton,
    description: 'Turkish Antep pistachios are smaller with a strong flavor and are often used in Turkish desserts like baklava.',
  },
  { 
    id: 55,
    name: 'Iranian Fandoghi Pistachio',
    image: perfection,
    description: 'Iranian Fandoghi pistachios are round and smaller, with a distinctive flavor that is popular in the Middle East.',
  },
  { 
    id: 56,
    name: 'Bronte Pistachio',
    image: blenheim,
    description: 'Bronte pistachios are grown in Sicily and are prized for their unique, vibrant green color and intense flavor.',
  },
  { 
    id: 57,
    name: 'Kalehghouchi Pistachio',
    image: goldkist,
    description: 'Kalehghouchi pistachios are large and round, known for their open shells and rich taste.',
  },
  { 
    id: 58,
    name: 'Badami Pistachio',
    image: chinese,
    description: 'Badami pistachios are long and thin, often used in Indian and Middle Eastern cuisines for their distinct flavor.',
  },
  { 
    id: 59,
    name: 'Akbari Pistachio',
    image: tomcot,
    description: 'Akbari pistachios are long and large, with a smooth texture and mild, buttery flavor.',
  },
  { 
    id: 60,
    name: 'Red Pistachio',
    image: katy,
    description: 'Red pistachios are dyed with a bright red color and have a crunchy texture, making them popular as a snack.',
  },
];



const CashewCards = () => {
 
    return (
      <Grid container spacing={2}>
        {pistachioTypes.map((pistachio) => (
          <Grid item xs={12} sm={6} md={3} key={pistachio.id}>
            <Card
            sx={{
              height: 400,

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
