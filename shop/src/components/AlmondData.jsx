import { Card, CardContent, CardMedia, Typography, Grid, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import nonpareil from '../Image/nonpareil.png';
import carmel from '../Image/carmel.png';
import sonora from '../Image/sonora.png';
import butte from '../Image/butte.png';
import mission from '../Image/mission.png';
import california from '../Image/california.png';
import fritz from '../Image/fritz.png';
import peerless from '../Image/peerless.png';
import { Rating } from '@mui/material'; 

const AlmondTypes = [
  {
    id: 1,
    Category:'Almonds',
    name: 'Nonpareil',
    image: nonpareil, // Image representing the Nonpareil almond variety
    description: 'Thin-skinned, easy to blanch, and used in many almond products. ' +
                 'The Nonpareil almond features a smooth and delicate skin that allows for easy blanching, ' +
                 'making it a popular choice for creating almond flour and almond milk. ' +
                 'Its consistent shape and size also make it ideal for use in snacks and confections. ' +
                 'Overall, it is one of the most sought-after varieties in the market due to its versatility.',
    price: 10.99,  // Price of the Nonpareil almond
    rating: 4.5,   // Rating out of 5
  },
  {
    id: 2,
    Category:'Almonds',
    name: 'Carmel',
    image: carmel, 
    description: 'Similar to Nonpareil but with a slightly wrinkled surface, often used for roasting. ' +
                 'The Carmel almond is appreciated for its robust flavor, making it ideal for roasting. ' +
                 'This variety has a distinct, wrinkled appearance that gives it a unique texture. ' +
                 'Carmel almonds are frequently found in snack mixes and baked goods, enhancing their taste. ' +
                 'They are a favorite among consumers looking for flavorful roasted almonds.',
    price: 9.99, 
    rating: 4.0,
  },
  {
    id: 3,
    Category:'Almonds',
    name: 'Sonora',
    image: sonora,
    description: 'Long, narrow almonds with a light color, commonly used in desserts. ' +
                 'Sonora almonds stand out due to their elongated shape and light, creamy color. ' +
                 'Their mild flavor makes them a great addition to various dessert recipes. ' +
                 'Bakers often choose Sonora almonds for garnishing and flavoring, especially in pastries. ' +
                 'These almonds also add a pleasing visual appeal to sweets, making them a popular choice.',
    price: 12.99, 
    rating: 4.2,
  },
  {
    id: 4,
    Category:'Almonds',
    name: 'Butte',
    image: butte, 
    description: 'Thicker-skinned, good for roasting and used in confectionery. ' +
                 'The Butte almond is characterized by its robust, thicker skin that adds a delightful crunch. ' +
                 'It is particularly well-suited for roasting, which enhances its rich flavor. ' +
                 'This variety is often used in confectionery products, including chocolate-covered almonds. ' +
                 'Its texture and taste make it a favorite for gourmet snacks and treats.',
    price: 8.99, 
    rating: 3.8,
  },
  {
    id: 5,
    Category:'Almonds',
    name: 'Mission',
    image: mission, 
    description: 'Darker skin, known for its slightly bittersweet flavor, often used in baking. ' +
                 'Mission almonds have a deep, dark skin that gives them a unique flavor profile. ' +
                 'Their slightly bittersweet taste complements various baked goods and desserts. ' +
                 'Bakers often prefer Mission almonds for cookies, cakes, and brownies, as they add depth to flavors. ' +
                 'This variety’s versatility makes it a staple in both home and professional kitchens.',
    price: 11.99, 
    rating: 4.3,
  },
  {
    id: 6,
    Category:'Almonds',
    name: 'California',
    image: california, 
    description: 'A category that includes several almond varieties, typically used for processed almond products. ' +
                 'California almonds are well-known for their high quality and diverse range. ' +
                 'This category encompasses multiple types, allowing for a variety of flavors and textures. ' +
                 'They are commonly used in creating almond butter, oils, and other processed products. ' +
                 'California almonds are often considered the benchmark for almond quality globally.',
    price: 13.99, 
    rating: 4.7,
  },
  {
    id: 7,
    Category:'Almonds',
    name: 'Fritz',
    image: fritz, 
    description: 'Small and hard, often used in almond paste and marzipan. ' +
                 'Fritz almonds are distinctive due to their small size and firm texture. ' +
                 'They are frequently utilized in making almond paste, which is a key ingredient in pastries. ' +
                 'Marzipan made from Fritz almonds is known for its rich flavor and smooth consistency. ' +
                 'This variety is a preferred choice among bakers for decorative and gourmet applications.',
    price: 14.99, 
    rating: 4.6,
  },
  {
    id: 8,
    Category:'Almonds',
    name: 'Peerless',
    image: peerless, 
    description: 'Commonly used in snacks, known for its mild flavor. ' +
                 'Peerless almonds are celebrated for their subtle, buttery flavor that appeals to many consumers. ' +
                 'They are often included in snack mixes and used as a topping for salads and desserts. ' +
                 'This variety’s mild taste makes it versatile for both sweet and savory dishes. ' +
                 'Peerless almonds are a popular choice for those seeking a healthy snack option.',
    price: 9.49, 
    rating: 4.1,
  },
];

const AlmondCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  return (
    <Grid container spacing={2} sx={{ mt: 12 }}>
      {AlmondTypes.map((almond) => (
        <Grid item xs={12} sm={6} md={3} key={almond.id}>
          <Card 
            onClick={() => handleCardClick(almond)} 
            sx={{
              height: 400,
              cursor: 'pointer',
              boxShadow: 5,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              width={100}
              image={almond.image}
              alt={almond.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {almond.name}
              </Typography>
              <Typography variant="body1" color="blue">
                Price: ${almond.price.toFixed(2)}
              </Typography>
              <Rating
                name={`rating-${almond.id}`}
                value={almond.rating}
                readOnly
                precision={0.1}
                sx={{ color: 'yellow' }}  
              />
              <Box display="flex" justifyContent="space-between" mt={2}>
                <IconButton sx={{ color: 'green' }}>
                  <ShoppingCart /> {/* Cart icon in green */}
                </IconButton>
                <IconButton sx={{ color: 'red' }}>
                  <Favorite /> {/* Favorite icon in red */}
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AlmondCards;
