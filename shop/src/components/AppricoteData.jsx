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
import { Rating } from '@mui/material'; 

const AppricotTypes = [
  { 
    id: 9,
    price: 20,
    name: 'Moorpark Apricot',
    image: chuli1, 
    rating: 4.1,
    description: 'Moorpark apricots are large, juicy, and known for their sweet, rich flavor. ' + 
                 'These apricots are particularly prized for their exceptional sweetness, making them ideal for fresh consumption. ' + 
                 'Their juicy flesh is perfect for preserves and canning, capturing their flavor for year-round enjoyment. ' + 
                 'Moorpark apricots are also great for baking and can enhance desserts with their luscious taste. ' + 
                 'Due to their size and sweetness, they are a favorite among apricot lovers.',
  },
  { 
    id: 10,
    price: 20,
    name: 'Tilton Apricot',
    image: chuli2, 
    rating: 4.5,
    description: 'Tilton apricots have a tangy, sweet flavor and are commonly used for drying and cooking. ' + 
                 'These apricots strike a perfect balance between sweet and tangy, making them a versatile option. ' + 
                 'They are often dried to enhance their flavor, resulting in a chewy texture thats perfect for snacking. ' + 
                 'In cooking, Tilton apricots add a delightful flavor to sauces and desserts. ' + 
                 'Their culinary uses make them a staple for both home cooks and professional chefs.',
  },
  { 
    id: 11,
    price: 20,
    name: 'Perfection Apricot',
    image: chuli3,
    rating: 4.,
    description: 'Perfection apricots are large with a firm texture and bright orange color, often used in fresh dishes. ' + 
                 'These apricots are visually striking, featuring a vibrant orange hue that enhances any dish. ' + 
                 'Their firm texture makes them ideal for slicing, ensuring they hold up well in salads and platters. ' + 
                 'Perfection apricots are best enjoyed fresh, allowing their full flavor to shine. ' + 
                 'Their size and appearance make them popular for garnishing and showcasing in culinary presentations.',
  },
  { 
    id: 12,
    price: 20,
    name: 'Blenheim Apricot',
    image: chuli4, 
    rating: 4.8,
    description: 'Blenheim apricots are sweet and juicy, ideal for both fresh consumption and drying. ' + 
                 'Known for their rich flavor, Blenheim apricots are a favorite for fresh eating due to their sweetness. ' + 
                 'They are also excellent for drying, which concentrates their flavor and sweetness even further. ' + 
                 'Blenheim apricots can be used in various recipes, from desserts to savory dishes, adding a unique twist. ' + 
                 'Their versatility and flavor make them a beloved choice among fruit enthusiasts.',
  },
  { 
    id: 13,
    price: 20,
    name: 'Gold Kist Apricot',
    image: chuli5, 
    rating: 4.4,
    description: 'Gold Kist apricots are early ripening with a sweet and slightly tart flavor, often enjoyed fresh. ' + 
                 'These apricots are known for their vibrant yellow color and delightful taste. ' + 
                 'Their early ripening makes them a popular choice for those looking to enjoy fresh fruit earlier in the season. ' + 
                 'Gold Kist apricots are great for snacking and can also be used in salads for added flavor. ' + 
                 'Their balance of sweetness and tartness adds complexity to various dishes and desserts.',
  },
  { 
    id: 14,
    price: 20,
    name: 'Chinese/Mormon Apricot',
    image: chuli6,
    rating: 4.1,
    description: 'Chinese or Mormon apricots are small, hardy, and have a sweet, mild flavor, often grown in cooler climates. ' + 
                 'These apricots are particularly resilient, thriving in less than ideal conditions. ' + 
                 'Their small size does not compromise their flavor, which is mild yet sweet, making them enjoyable fresh. ' + 
                 'Chinese apricots are often used in jams and preserves, capturing their essence for later use. ' + 
                 'Their adaptability and flavor make them a unique addition to any apricot collection.',
  },
  { 
    id: 15,
    price: 20,
    name: 'Tomcot Apricot',
    image: chuli7, 
    description: 'Tomcot apricots ripen early and are known for their vibrant color and balanced sweet-tart flavor. ' + 
                 'These apricots stand out with their striking color, attracting attention in orchards and markets. ' + 
                 'Their early ripening makes them a favorite for those eager to enjoy apricots before other varieties. ' + 
                 'Tomcot apricots offer a well-rounded flavor, making them suitable for both fresh eating and cooking. ' + 
                 'Their versatility allows them to shine in a variety of culinary applications, from desserts to savory dishes.',
  },
  { 
    id: 16,
    price: 20,
    name: 'Katy Apricot',
    image: chuli8, 
    description: 'Katy apricots are large, sweet, and flavorful, commonly enjoyed fresh or in salads. ' + 
                 'These apricots are celebrated for their size, which makes them a substantial addition to any dish. ' + 
                 'Their sweetness is exceptional, providing a delicious contrast in salads and fruit platters. ' + 
                 'Katy apricots are also great for baking, where their flavor can enhance various desserts. ' + 
                 'Their delightful taste and size make them a popular choice for those seeking a satisfying snack.',
  },
  { 
    id: 17,
    price: 20,
    name: 'Royal Apricot',
    image: chuli9, 
    description: 'Royal apricots have an intense flavor and are often used for canning and drying. ' + 
                 'These apricots are known for their rich, sweet taste that captivates the palate. ' + 
                 'Their intense flavor makes them ideal for preserving, allowing their essence to be enjoyed year-round. ' + 
                 'Royal apricots are often chosen for canning, as their taste remains robust even after processing. ' + 
                 'They are a staple for those who love to create homemade preserves and jams.',
  },
  { 
    id: 18,
    price: 20,
    name: 'Puget Gold Apricot',
    image: chuli10, 
    description: 'Puget Gold apricots thrive in cooler climates and are known for their sweet, delicious taste. ' + 
                 'These apricots are specially adapted to thrive in regions with cooler temperatures. ' + 
                 'Their sweetness is enhanced by the growing conditions, resulting in a delightful flavor. ' + 
                 'Puget Gold apricots are often enjoyed fresh or used in cooking to add a touch of sweetness. ' + 
                 'Their ability to thrive in cooler climates makes them a unique option for apricot lovers.',
  },
  { 
    id: 19,
    price: 20,
    name: 'Autumn Glo Apricot',
    image: chuli11,
    description: 'Autumn Glo apricots ripen later in the season, with a juicy texture and rich, sweet flavor. ' + 
                 'These apricots are a delightful treat for those who enjoy late-season fruits. ' + 
                 'Their juicy texture and sweetness make them perfect for fresh eating and baking. ' + 
                 'Autumn Glo apricots can enhance various desserts, adding a seasonal touch to dishes. ' + 
                 'Their late ripening makes them a cherished variety for prolonging the apricot season.',
  },
  { 
    id: 20,
    price: 20,
    name: 'Harcot Apricot',
    image: chuli12, 
    description: 'Harcot apricots are known for their excellent flavor and are perfect for fresh eating or making jams. ' + 
                 'These apricots are highly regarded for their rich taste, making them a favorite for fresh snacks. ' + 
                 'Their sweet flavor also makes them ideal for creating homemade jams and preserves. ' + 
                 'Harcot apricots hold their flavor well during cooking, enhancing various recipes. ' + 
                 'Their exceptional taste and versatility make them a popular choice among apricot enthusiasts.',
  },
];


const AppricotCards = () => {

  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });
  };
 
    return (
      <Grid container spacing={2} sx={{mt:12}}>
        {AppricotTypes.map((appricot) => (
          <Grid item xs={12} sm={6} md={3} key={appricot.id}>
            <Card 
            onClick={() => handleCardClick(appricot)} 
            sx={{
              height: 400,
              cursor: 'pointer',
              boxShadow: 5,
            }}
          >
            <CardMedia
              component="img"
              height="290"
              width={100}
              image={appricot.image}
              alt={appricot.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {appricot.name}
              </Typography>
              <Typography variant="body1" color="blue">
                Price: ${appricot.price.toFixed(2)}
              </Typography>
              <Rating
                name={`rating-${appricot.id}`}
                value={appricot.rating}
                readOnly
                precision={0.1}
              />                
            </CardContent>
          </Card>
          </Grid>
        ))}
      </Grid>
    );
};

export default AppricotCards;
