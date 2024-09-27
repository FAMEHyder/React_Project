import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <AppBar>
       <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1,marginLeft:120 }}>

        <Button color="inherit" onClick={() => handleClick('/Signin')}>Sign In</Button>
        <Button color="inherit" onClick={() => handleClick('/Signup')}>Sign Up</Button>
        <Button color="inherit" onClick={() => handleClick('/')}> <ShoppingCartIcon /></Button>
        <Button color="inherit" onClick={() => handleClick('/ProductTable')}> <CheckCircleIcon /></Button>
        
        
        </Box>
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        
        
        <Typography variant="h6" component="div" 
                  onClick={() => handleClick('/')}
                  sx={{ flex: 1, cursor:'pointer', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
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
  );
};

export default Navbar;
