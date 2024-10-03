import { Box, Container, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import SliderComponent from '../components/Slider'; // Adjust the path as necessary
import AlmondData from '../components/AlmondData.jsx';
import CashewData from '../components/CashewData.jsx';
import DatesData from '../components/DatesData.jsx';
import WalnutData from '../components/WalnutData.jsx';
import ApprocoteData from '../components/AppricoteData.jsx';
import PistachioData from '../components/PistachioData.jsx';
import RaisinData from '../components/RaisinData.jsx';
import Footer from './Footer.jsx';
import bg from '../Image/bg1.png';
import bg1 from '../Image/bg1.png';
import bg2 from '../Image/bg2.png';
import bg3 from '../Image/bg6.png';
import bg4 from '../Image/bg4.png';
import bg5 from '../Image/bg5.png';
import bg6 from '../Image/bg6.png';

const Home = () => {
  const backgrounds = [bg, bg1, bg2, bg3, bg4, bg5, bg6]; // Array of background images
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
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
          height: { xs: '80vh', sm: '100vh', md: '120vh' }, // Responsive height
          '&::before': {
            content: '""',
            position: 'absolute',
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
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black transparent overlay
            zIndex: -1, // Ensures it's between the image and content
          },
        }}
      >
        <SliderComponent />
      </Box>

      <Box sx={{ marginTop: '30px', paddingX: { xs: 2, sm: 4, md: 8 } }}>
        <Typography
          marginTop={5}
          fontSize={{ xs: 24, sm: 30 }}
          fontWeight={800}
          fontFamily={'cambria'}
          textAlign="center"
        >
          Almonds and its Varieties
        </Typography>
        <AlmondData />

        <Typography
          marginTop={10}
          fontSize={{ xs: 24, sm: 30 }}
          fontWeight={800}
          fontFamily={'cambria'}
          textAlign="center"
        >
          Cashews and its Varieties
        </Typography>
        <CashewData />

        <Typography
          marginTop={10}
          fontSize={{ xs: 24, sm: 30 }}
          fontWeight={800}
          fontFamily={'cambria'}
          textAlign="center"
        >
          Dates and its Varieties
        </Typography>
        <DatesData />

        <Typography
          marginTop={10}
          fontSize={{ xs: 24, sm: 30 }}
          fontWeight={800}
          fontFamily={'cambria'}
          textAlign="center"
        >
          Walnuts and its Varieties
        </Typography>
        <WalnutData />

        <Typography
          marginTop={10}
          fontSize={{ xs: 24, sm: 30 }}
          fontWeight={800}
          fontFamily={'cambria'}
          textAlign="center"
        >
          Appricotes and its Varieties
        </Typography>
        <ApprocoteData />

        <Typography
          marginTop={10}
          fontSize={{ xs: 24, sm: 30 }}
          fontWeight={800}
          fontFamily={'cambria'}
          textAlign="center"
        >
          Raisins and its Varieties
        </Typography>
        <RaisinData />

        <Typography
          marginTop={10}
          fontSize={{ xs: 24, sm: 30 }}
          fontWeight={800}
          fontFamily={'cambria'}
          textAlign="center"
        >
          Pistachios and its Varieties
        </Typography>
        <PistachioData />
      </Box>

      <Footer />
    </Container>
  );
};

export default Home;
