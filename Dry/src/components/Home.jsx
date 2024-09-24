import { AppBar, Toolbar, Button, Typography, Box, Container } from '@mui/material';
import bg from '../Image/bg1.png';
import bg1 from '../Image/bg1.png';
import bg2 from '../Image/bg2.png';
import bg3 from '../Image/bg6.png';
import bg4 from '../Image/bg4.png';
import bg5 from '../Image/bg5.png';
import bg6 from '../Image/bg6.png';
import SliderComponent from '../components/Slider'; // Adjust the path as necessary
import AlmondData from '../components/AlmondData.jsx';
import CashewData from '../components/CashewData.jsx';
import DatesData from '../components/DatesData.jsx';
import WalnutData from '../components/WalnutData.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Footer.jsx';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const backgrounds = [bg,bg1, bg2, bg3,bg4,bg5,bg6,];  // Array of background images

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, );

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ padding: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <AppBar>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="h6" component="div" sx={{ flex: 1 }}>
            SatTara Dryfruits
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <Button color="inherit" onClick={() => handleClick('/1')}>Almonds</Button>
            <Button color="inherit" onClick={() => handleClick('/2')}>Cashews</Button>
            <Button color="inherit" onClick={() => handleClick('/3')}>Walnuts</Button>
            <Button color="inherit" onClick={() => handleClick('/4')}>Pistachios</Button>
            <Button color="inherit" onClick={() => handleClick('/5')}>Raisins</Button>
            <Button color="inherit" onClick={() => handleClick('/6')}>Dried Apricots</Button>
            <Button color="inherit" onClick={() => handleClick('/7')}>Dates</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: `url(${backgrounds[currentBg]})`, // Dynamically set the background image
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200vh', // Full height for demonstration purposes
        }}
      >
        <SliderComponent />
      </Box>

      <Box sx={{ marginTop: '30px' }}>
        <Typography marginLeft={60} fontSize={30} fontWeight={800} fontFamily={'cambria'}>
          Almonds and its Varieties
        </Typography>
        <AlmondData />

        <Typography marginTop={10} marginLeft={60} fontSize={30} fontWeight={800} fontFamily={'cambria'}>
          Cashews and its Varieties
        </Typography>
        <CashewData />

        <Typography marginTop={10} marginLeft={60} fontSize={30} fontWeight={800} fontFamily={'cambria'}>
          Dates and its Varieties
        </Typography>
        <DatesData />

        <Typography marginTop={10} marginLeft={60} fontSize={30} fontWeight={800} fontFamily={'cambria'}>
          Walnuts and its Varieties
        </Typography>
        <WalnutData />
        <Footer/>
      </Box>
    </Container>
  );
};

export default Home;
