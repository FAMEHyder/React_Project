import { AppBar, Toolbar, Button, Typography, Box, Container } from '@mui/material';
import bg from '../Image/bg.png';
import SliderComponent from '../components/Slider'; // Adjust the path as necessary
import AlmondData from '../components/AlmondData.jsx';
import CashewData from '../components/CashewData.jsx';
import DatesData from '../components/DatesData.jsx';
import WalnutData from '../components/WalnutData.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (path)=>{
    navigate(path)
  }
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
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
            <Button color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} onClick={() => handleClick('/1')}>Almonds</Button>
            <Button color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} >Cashews</Button>
            <Button color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} >Walnuts</Button>
            <Button color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} >Pistachios</Button>
            <Button color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} >Raisins</Button>
            <Button color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} >Dried Apricots</Button>
            <Button color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} >Dates</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <Button color="inherit" >Almonds</Button>
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
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SliderComponent/>
        
      </Box>

      <Box
      sx={{
        marginTop:'30px',

      }}
      
      >
        <Typography marginLeft={60} fontSize={30} fontWeight={800} fontFamily={'cambria'}>Almonds and its Varieties</Typography>
      <AlmondData/>
        <Typography marginTop={10} marginLeft={60} fontSize={30} fontWeight={800} fontFamily={'cambria'}>Cashews and its Varieties</Typography>
        <CashewData/>
        <Typography marginTop={10} marginLeft={60} fontSize={30} fontWeight={800} fontFamily={'cambria'}>Dates and its Varieties</Typography>
        <DatesData/>
        <Typography marginTop={10} marginLeft={60} fontSize={30} fontWeight={800} fontFamily={'cambria'}>Walnuts and its Varieties</Typography>
        <WalnutData/>

      </Box>
    </Container>
  );
};

export default Home;
