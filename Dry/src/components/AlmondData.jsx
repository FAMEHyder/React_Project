import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import nonpareil from '../Image/nonpareil.png';
import carmel from '../Image/carmel.png';
import sonora from '../Image/sonora.png';
import butte from '../Image/butte.png';
import mission from '../Image/mission.png';
import california from '../Image/california.png';
import fritz from '../Image/fritz.png';
import peerless from '../Image/peerless.png';

const almondData = [
  {
    id: 1,
    name: 'Nonpareil',
    image: nonpareil,
    description: 'Thin-skinned, easy to blanch, and used in many almond products.',
    price: 10.99,  // Add price for example
  },
  {
    id: 2,
    name: 'Carmel',
    image: carmel,
    description: 'Similar to Nonpareil but with a slightly wrinkled surface, often used for roasting.',
    price: 9.99,
  },
  {
    id: 3,
    name: 'Sonora',
    image: sonora,
    description: 'Long, narrow almonds with a light color, commonly used in desserts.',
    price: 12.99,
  },
  {
    id: 4,
    name: 'Butte',
    image: butte,
    description: 'Thicker-skinned, good for roasting and used in confectionery.',
    price: 8.99,
  },
  {
    id: 5,
    name: 'Mission',
    image: mission,
    description: 'Darker skin, known for its slightly bittersweet flavor, often used in baking.',
    price: 11.99,
  },
  {
    id: 6,
    name: 'California',
    image: california,
    description: 'A category that includes several almond varieties, typically used for processed almond products.',
    price: 13.99,
  },
  {
    id: 7,
    name: 'Fritz',
    image: fritz,
    description: 'Small and hard, often used in almond paste and marzipan.',
    price: 14.99,
  },
  {
    id: 8,
    name: 'Peerless',
    image: peerless,
    description: 'Commonly used in snacks, known for its mild flavor.',
    price: 9.49,
  },
];

// AlmondCards Component
const AlmondCards = () => {

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle card clicks and navigate to product details
  const handleCardClick = (product) => {
    navigate(`/productDetails`, { state: { product } });

  };

  return (
    <Grid container spacing={2} sx={{mt:12}}>
      {almondData.map((almond) => (
        <Grid item xs={12} sm={6} md={3} key={almond.id}>
          <Card
            onClick={() => handleCardClick(almond)} // Pass the entire almond object
            sx={{
              height: 400,
              cursor: 'pointer', // Show pointer cursor on hover
              // boxShadow:'2px 2px 2px 2px gray',
              boxShadow:5,

            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={almond.image}
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


// import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import nonpareil from '../Image/nonpareil.png';
// import carmel from '../Image/carmel.png';
// import sonora from '../Image/sonora.png';
// import butte from '../Image/butte.png';
// import mission from '../Image/mission.png';
// import california from '../Image/california.png';
// import fritz from '../Image/fritz.png';
// import peerless from '../Image/peerless.png';

// // Almond data array
// const almondData = [
//   {
//     id: 1,
//     name: 'Nonpareil',
//     picture: nonpareil,
//     description: 'Thin-skinned, easy to blanch, and used in many almond products.',
//   },
//   {
//     id: 2,
//     name: 'Carmel',
//     picture: carmel,
//     description: 'Similar to Nonpareil but with a slightly wrinkled surface, often used for roasting.',
//   },
//   {
//     id: 3,
//     name: 'Sonora',
//     picture: sonora,
//     description: 'Long, narrow almonds with a light color, commonly used in desserts.',
//   },
//   {
//     id: 4,
//     name: 'Butte',
//     picture: butte,
//     description: 'Thicker-skinned, good for roasting and used in confectionery.',
//   },
//   {
//     id: 5,
//     name: 'Mission',
//     picture: mission,
//     description: 'Darker skin, known for its slightly bittersweet flavor, often used in baking.',
//   },
//   {
//     id: 6,
//     name: 'California',
//     picture: california,
//     description: 'A category that includes several almond varieties, typically used for processed almond products.',
//   },
//   {
//     id: 7,
//     name: 'Fritz',
//     picture: fritz,
//     description: 'Small and hard, often used in almond paste and marzipan.',
//   },
//   {
//     id: 8,
//     name: 'Peerless',
//     picture: peerless,
//     description: 'Commonly used in snacks, known for its mild flavor.',
//   },
// ];

// // AlmondCards Component
// const AlmondCards = () => {
//   const navigate = useNavigate(); // Hook for programmatic navigation

//   // Function to handle card clicks and navigate to product details
//   const handleCardClick = (product) => {
//     navigate(`/productDetails`, { state: { product } }); // Pass product data via navigate
//   };

//   return (
//     <Grid container spacing={2}>
//       {almondData.map((almond) => (
//         <Grid item xs={12} sm={6} md={3} key={almond.id}>
//           <Card
//             onClick={() => handleCardClick(almond)} // Pass the clicked almond object
//             sx={{
//               height: 400,
//               cursor: 'pointer', // Show pointer cursor on hover
//             }}
//           >
//             <CardMedia
//               component="img"
//               height="200"
//               image={almond.picture}
//               alt={almond.name}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {almond.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {almond.description}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default AlmondCards;
