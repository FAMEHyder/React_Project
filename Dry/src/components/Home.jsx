import { AppBar, Toolbar, Button, Typography, Box, Container } from '@mui/material';
import bg from '../Image/bg.png';
import SliderComponent from '../components/Slider'; // Adjust the path as necessary

const Home = () => {
  return (
    <Container
      maxWidth={false} // Ensure the container takes the full width
      disableGutters // Remove padding and margins from the container
      sx={{ padding: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <AppBar>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            SatTara Dryfruits
          </Typography>
          <Box>
            <Button color="inherit">Almonds</Button>
            <Button color="inherit">Cashews</Button>
            <Button color="inherit">Walnuts</Button>
            <Button color="inherit">Pistachios</Button>
            <Button color="inherit">Raisins</Button>
            <Button color="inherit">Dried Apricots</Button>
            <Button color="inherit">Dates</Button>
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
          
        }}
      >
        <SliderComponent/>
      </Box>
    </Container>
  );
};

export default Home;
