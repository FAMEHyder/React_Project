import { Box, Container,  } from '@mui/material';
import { useState, useEffect } from 'react';
import SliderComponent from './Slider.jsx'; // Adjust the path as necessary
import bg from '../Image/bg1.png';
import bg1 from '../Image/bg1.png';
import bg2 from '../Image/bg2.png';
import bg3 from '../Image/bg6.png';
import bg4 from '../Image/bg4.png';
import bg5 from '../Image/bg5.png';
import bg6 from '../Image/bg6.png';
import FruitSliders from '../components/FruitSlider.jsx';

const Home = () => {
  const backgrounds = [bg, bg1, bg2, bg3, bg4, bg5, bg6]; // Array of background images
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length); // Loop through images
    }, 3000);

    return () => clearInterval(intervalId); 
  },);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >

      <Box
         sx={{
          position: 'relative',
          
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '120vh', sm: '150vh', md: '200vh' }, // Responsive height
          '&::before': {
            content: '""',
            position: 'absolute',
            height:'700px',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgrounds[currentBg]})`, // Dynamically set the background image
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: -2, // Ensures it's behind everything
            transition: 'background-image 1s ease-in-out',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height:'700px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black transparent overlay
            zIndex: -1, // Ensures it's between the image and content
          },
        }}
      >
      </Box>

      <Box sx={{ marginTop: '200px', paddingX: { xs: 2, sm: 4, md: 8 } }}>
        
        <SliderComponent />
        
      </Box>

      <Box sx={{ marginTop: '20px', paddingX: { xs: 2, sm: 4, md: 8 } }}>
        
        <FruitSliders />
        
      </Box>

    </Container>
  );
};

export default Home;
