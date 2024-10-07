// Home.jsx
import { Box, Container, Typography, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';
import SliderComponent from '../components/Slider'; // Adjust the path as necessary
import AlmondData from '../components/AlmondData.jsx';
import CashewData from '../components/CashewData.jsx';
import DatesData from '../components/DatesData.jsx';
import WalnutData from '../components/WalnutData.jsx';
import ApricotData from '../components/ApricotData.jsx'; // Corrected component name
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
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    // Simulate data loading
    const loadData = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
      clearTimeout(loadData); // Cleanup timeout on component unmount
    };
  }, [backgrounds.length]);

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
      {/* Background Image Section */}
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
            height: '700px',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgrounds[currentBg]})`, // Corrected syntax
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
            height: '700px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black transparent overlay
            zIndex: -1, // Ensures it's between the image and content
          },
        }}
      >
        {loading && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ position: 'absolute', top: 0, left: 0, zIndex: -3 }}
          />
        )}
      </Box>

      {/* Main Content Section */}
      <Box sx={{ marginTop: { xs: '150px', sm: '180px', md: '200px' }, paddingX: { xs: 2, sm: 4, md: 8 } }}>
        {/* Almonds Section */}
        <Box sx={{ mb: 4 }}>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                width={{ xs: '80%', sm: '60%' }}
                height={40}
                sx={{ margin: '0 auto', display: 'block' }}
              />
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ marginTop: '1rem', borderRadius: '8px' }}
              />
            </>
          ) : (
            <>
              <Typography
                fontSize={{ xs: 24, sm: 30 }}
                fontWeight={800}
                fontFamily={'cambria'}
                textAlign="center"
                gutterBottom
              >
                <SliderComponent />
                Almonds and its Varieties
              </Typography>
              <AlmondData />
            </>
          )}
        </Box>

        {/* Cashews Section */}
        <Box sx={{ mb: 4 }}>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                width={{ xs: '80%', sm: '60%' }}
                height={40}
                sx={{ margin: '0 auto', display: 'block' }}
              />
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ marginTop: '1rem', borderRadius: '8px' }}
              />
            </>
          ) : (
            <>
              <Typography
                fontSize={{ xs: 24, sm: 30 }}
                fontWeight={800}
                fontFamily={'cambria'}
                textAlign="center"
                gutterBottom
              >
                Cashews and its Varieties
              </Typography>
              <CashewData />
            </>
          )}
        </Box>

        {/* Dates Section */}
        <Box sx={{ mb: 4 }}>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                width={{ xs: '80%', sm: '60%' }}
                height={40}
                sx={{ margin: '0 auto', display: 'block' }}
              />
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ marginTop: '1rem', borderRadius: '8px' }}
              />
            </>
          ) : (
            <>
              <Typography
                fontSize={{ xs: 24, sm: 30 }}
                fontWeight={800}
                fontFamily={'cambria'}
                textAlign="center"
                gutterBottom
              >
                Dates and its Varieties
              </Typography>
              <DatesData />
            </>
          )}
        </Box>

        {/* Walnuts Section */}
        <Box sx={{ mb: 4 }}>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                width={{ xs: '80%', sm: '60%' }}
                height={40}
                sx={{ margin: '0 auto', display: 'block' }}
              />
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ marginTop: '1rem', borderRadius: '8px' }}
              />
            </>
          ) : (
            <>
              <Typography
                fontSize={{ xs: 24, sm: 30 }}
                fontWeight={800}
                fontFamily={'cambria'}
                textAlign="center"
                gutterBottom
              >
                Walnuts and its Varieties
              </Typography>
              <WalnutData />
            </>
          )}
        </Box>

        {/* Apricots Section */}
        <Box sx={{ mb: 4 }}>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                width={{ xs: '80%', sm: '60%' }}
                height={40}
                sx={{ margin: '0 auto', display: 'block' }}
              />
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ marginTop: '1rem', borderRadius: '8px' }}
              />
            </>
          ) : (
            <>
              <Typography
                fontSize={{ xs: 24, sm: 30 }}
                fontWeight={800}
                fontFamily={'cambria'}
                textAlign="center"
                gutterBottom
              >
                Apricots and its Varieties
              </Typography>
              <ApricotData />
            </>
          )}
        </Box>

        {/* Raisins Section */}
        <Box sx={{ mb: 4 }}>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                width={{ xs: '80%', sm: '60%' }}
                height={40}
                sx={{ margin: '0 auto', display: 'block' }}
              />
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ marginTop: '1rem', borderRadius: '8px' }}
              />
            </>
          ) : (
            <>
              <Typography
                fontSize={{ xs: 24, sm: 30 }}
                fontWeight={800}
                fontFamily={'cambria'}
                textAlign="center"
                gutterBottom
              >
                Raisins and its Varieties
              </Typography>
              <RaisinData />
            </>
          )}
        </Box>

        {/* Pistachios Section */}
        <Box sx={{ mb: 4 }}>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                width={{ xs: '80%', sm: '60%' }}
                height={40}
                sx={{ margin: '0 auto', display: 'block' }}
              />
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ marginTop: '1rem', borderRadius: '8px' }}
              />
            </>
          ) : (
            <>
              <Typography
                fontSize={{ xs: 24, sm: 30 }}
                fontWeight={800}
                fontFamily={'cambria'}
                textAlign="center"
                gutterBottom
              >
                Pistachios and its Varieties
              </Typography>
              <PistachioData />
            </>
          )}
        </Box>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Container>
  );
};

export default Home;
