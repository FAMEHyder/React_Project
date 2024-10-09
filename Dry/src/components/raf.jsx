
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Box, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import nonpareil from '../Image/nonpareil.png';
import carmel from '../Image/carmel.png';
//apricot pics
import chuli1 from '../Image/chuli1.png'
import chuli2 from '../Image/chuli2.png';
//cashews pics
import w180 from '../Image/w180.png'
import jambo from '../Image/jambo.png';
//dates pics
import medjol from '../Image/medjol.png';
import noor from '../Image/noor.png';
//pistachio 
import kerman from '../Image/kerman.png'
import antep from '../Image/antep.png';
//raisin data
import sultana from '../Image/sultana.png';
import golden from '../Image/golden.png';
// walnut
import eng from "../Image/engwalnut.png";
const ProductData = [
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
    image: carmel, // Image representing the Carmel almond variety
    description: 'Similar to Nonpareil but with a slightly wrinkled surface, often used for roasting. ' +
                 'The Carmel almond is appreciated for its robust flavor, making it ideal for roasting. ' +
                 'This variety has a distinct, wrinkled appearance that gives it a unique texture. ' +
                 'Carmel almonds are frequently found in snack mixes and baked goods, enhancing their taste. ' +
                 'They are a favorite among consumers looking for flavorful roasted almonds.',
    price: 9.99, // Price of the Carmel almond
    rating: 4.0,
  },
  // Appricote Data
  { 
    id: 9,
    Category:'Apricot',
    price: 20,
    name: 'Moorpark Apricot',
    image: chuli1, // Image representing the Moorpark apricot variety
    description: 'Moorpark apricots are large, juicy, and known for their sweet, rich flavor. ' + 
                 'These apricots are particularly prized for their exceptional sweetness, making them ideal for fresh consumption. ' + 
                 'Their juicy flesh is perfect for preserves and canning, capturing their flavor for year-round enjoyment. ' + 
                 'Moorpark apricots are also great for baking and can enhance desserts with their luscious taste. ' + 
                 'Due to their size and sweetness, they are a favorite among apricot lovers.',
                 
    rating: 4.5,   // Rating out of 5
  },
  { 
    id: 10,
    Category:'Apricot',
    price: 20,
    name: 'Tilton Apricot',
    image: chuli2, // Image representing the Tilton apricot variety
    description: 'Tilton apricots have a tangy, sweet flavor and are commonly used for drying and cooking. ' + 
                 'These apricots strike a perfect balance between sweet and tangy, making them a versatile option. ' + 
                 'They are often dried to enhance their flavor, resulting in a chewy texture thats perfect for snacking. ' + 
                 'In cooking, Tilton apricots add a delightful flavor to sauces and desserts. ' + 
                 'Their culinary uses make them a staple for both home cooks and professional chefs.',
                 
    rating: 4.5,   // Rating out of 5
  },

//Cashews Data
{
  id: 21,
  Category:'cashew',
  price:120,
  name: 'W-180 (King of Cashews)',
  image: w180,
  description: 'W-180, known as the "King of Cashews," is the largest and highest quality cashew nut available.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 22,
  Category:'cashew',
  price:120,
  name: 'W-210 (Jumbo Cashews)',
  image: jambo,
  description: 'W-210 cashews are large, high-quality nuts, perfect for gourmet snacks and recipes.',
  
    rating: 4.5,   // Rating out of 5
},
//Dates Data
{
  id: 33,
  Category:'dates',
  price:50,
  name: 'Medjool',
  image: medjol, // Replace with actual image URLs
  description: 'Large, soft, and rich in flavor, Medjool dates are known as the "king of dates".',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 34,
  Category:'dates',
  price:50,
  name: 'Deglet Noor',
  image: noor,
  description: 'Deglet Noor dates are known for their semi-dry texture and mild sweetness, making them one of the most popular date varieties in the world. Their firmness and delicate flavor allow them to be versatile in both sweet and savory dishes. They are often used in cooking, baking, and as a snack. Because they aren t overly sticky or too sweet, they are great for stuffing, chopping into salads, blending into smoothies, or incorporating into recipes like date bars and energy bites.',
  
    rating: 4.5,   // Rating out of 5
},
//pischio data
{
  id: 53,
  Category:'pistachio',
  price:40,
  name: 'Kerman Pistachio',
  image: kerman,
  description: 'Kerman pistachios are known for their large size, creamy texture, and rich flavor, making them a popular variety.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 54,
  Category:'pistachio',
  price:40,
  name: 'Turkish Antep Pistachio',
  image: antep,
  description: 'Turkish Antep pistachios are smaller with a strong flavor and are often used in Turkish desserts like baklava.',
  
    rating: 4.5,   // Rating out of 5
},

//raisins data
{
  id: 53,
  Category:'Raisins',
  price:30,
  name: 'Sultana Raisin',
  image: sultana,
  description: 'Sultana raisins are light yellow and known for their juicy and sweet flavor.',
  
    rating: 4.5,   // Rating out of 5
},
{
  id: 54,
  Category:'Raisins',
  price:30,
  name: 'Golden Raisin',
  image: golden,
  description: 'Golden raisins are plumper and have a milder flavor compared to regular raisins.',
  
    rating: 4.5,   // Rating out of 5
},
//walnutdata
{
  id: 65,
  Category:'walnut',
  price:23,
  name: 'English Walnuts (Persian Walnuts)',
  image: eng, // Replace with a valid image URL
  description: 'English walnuts are known for their mild flavor and thin, easy-to-crack shells.',
  
    rating: 4.5,   // Rating out of 5
},
];

// AlmondCards Component
const AlmondCards = () => {

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };

  // Function to handle adding items to the cart
  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent triggering the card click event
    // Implement your add to cart logic here
    console.log(`Added ${product.name} to cart.`);
  };

  return (
    <Grid container spacing={2} sx={{ mt: 12 }}>
      {ProductData.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.Category}>
          <Card
            onClick={() => handleCardClick(product)} // Pass the entire almond object
            sx={{
              height: 400,
              cursor: 'pointer', // Show pointer cursor on hover
              boxShadow: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                ${product.price.toFixed(2)}
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Rating
                  name={`rating-${product.id}`}
                  value={product.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                />
                <IconButton
                  color="primary"
                  onClick={(e) => handleAddToCart(e, product)}
                  aria-label="add to cart"
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AlmondCards ;
