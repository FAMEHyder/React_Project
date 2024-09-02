
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import nonpareil from '../Image/nonpareil.png';
const almondData = [
  {
    id: 1,
    name: 'Nonpareil',
    picture: nonpareil,
    description: 'Thin-skinned, easy to blanch, and used in many almond products.',
  },
  {
    id: 2,
    name: 'Carmel',
    picture: 'url-to-picture-2',
    description: 'Similar to Nonpareil but with a slightly wrinkled surface, often used for roasting.',
  },
  {
    id: 3,
    name: 'Sonora',
    picture: 'url-to-picture-3',
    description: 'Long, narrow almonds with a light color, commonly used in desserts.',
  },
  {
    id: 4,
    name: 'Butte',
    picture: 'url-to-picture-4',
    description: 'Thicker-skinned, good for roasting and used in confectionery.',
  },
  {
    id: 5,
    name: 'Mission',
    picture: 'url-to-picture-5',
    description: 'Darker skin, known for its slightly bittersweet flavor, often used in baking.',
  },
  {
    id: 6,
    name: 'California',
    picture: 'url-to-picture-6',
    description: 'A category that includes several almond varieties, typically used for processed almond products.',
  },
  {
    id: 7,
    name: 'Fritz',
    picture: 'url-to-picture-7',
    description: 'Small and hard, often used in almond paste and marzipan.',
  },
  {
    id: 8,
    name: 'Peerless',
    picture: 'url-to-picture-8',
    description: 'Commonly used in snacks, known for its mild flavor.',
  },
];

const AlmondCards = () => {
  return (
    <Grid container spacing={2}>
      {almondData.map((almond) => (
        <Grid item xs={12} sm={6} md={3} key={almond.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              width={100}
              image={almond.picture}
              alt={almond.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {almond.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {almond.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AlmondCards;
