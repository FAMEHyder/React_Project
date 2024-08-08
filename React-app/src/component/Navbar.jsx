import { useState } from 'react';
import AppBar from '@mui/material/AppBar'; // Import AppBar component for the top bar
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar component for the content within the AppBar
import IconButton from '@mui/material/IconButton'; // Import IconButton for clickable icons
import Typography from '@mui/material/Typography'; // Import Typography for text styling
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon for the hamburger icon
import Container from '@mui/material/Container'; // Import Container for responsive layout
import Box from '@mui/material/Box'; // Import Box for layout
import Drawer from '@mui/material/Drawer'; // Import Drawer for side drawer on mobile
import List from '@mui/material/List'; // Import List for list layout
import ListItem from '@mui/material/ListItem'; // Import ListItem for individual list items
import ListItemText from '@mui/material/ListItemText'; // Import ListItemText for text in ListItem
import Button from '@mui/material/Button'; // Import Button for buttons
import Divider from '@mui/material/Divider'; // Import Divider to separate list items

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerClose} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Company Name
      </Typography>
      <Divider />
      <List>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemText primary="Our Team" />
        </ListItem>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Company Name
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button sx={{ color: '#fff' }}>Home</Button>
              <Button sx={{ color: '#fff' }}>Our Team</Button>
              <Button sx={{ color: '#fff' }}>Contact Us</Button>
              <Button sx={{ color: '#fff' }}>About Us</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
