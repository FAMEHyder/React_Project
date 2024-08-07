
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box } from '@mui/material';
import { Home, Build, Info, ContactMail, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <IconButton component={Link} to="/" color="inherit">
            <Home />
            Home
          </IconButton>
          <IconButton component={Link} to="/service" color="inherit">
            <Build />
            Service
          </IconButton>
          <IconButton component={Link} to="/about" color="inherit">
            <Info />
            About Us
          </IconButton>
          <IconButton component={Link} to="/contact" color="inherit">
            <ContactMail />
            Contact Us
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
