import { useState } from 'react';
import { Box, AppBar, Toolbar, Button, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { AccountCircle, Storefront, ShoppingCart, Settings } from '@mui/icons-material'; // Import necessary icons
import { useNavigate } from 'react-router-dom';
import Cl from '../image/CompanyLogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  const [openDropdown, setOpenDropdown] = useState(''); // Manage the open state of each dropdown

  const handleClick = (path) => {
    navigate(path);
  };

  const handleMenuClick = (event, item) => {
    // Toggle dropdown for the selected item
    if (openDropdown === item) {
      setOpenDropdown(''); // Close dropdown if the same item is clicked
    } else {
      setOpenDropdown(item); // Open dropdown for the selected item
    }
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedItem('');
    setOpenDropdown('');
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '8px', bgcolor: 'green', height: '70px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left side */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              onClick={() => handleClick('/')}
              sx={{
                paddingX: { xs: 2, sm: 4, md: 8 },
                cursor: 'pointer',
                backgroundImage: `url(${Cl})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: 70,
                width: '100px',
              }}
            />
          </Box>

          {/* Right side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Profile Button */}
            <Button sx={{ color: 'white', mr: 5 }} onClick={() => handleClick('/profile')}>
              <AccountCircle fontSize="large" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Static Sidebar */}
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          top: '70px',  // Offset below the navbar
          left: 0,
          width: '250px',
          height: '100vh',  // Full height of the screen
          bgcolor: 'lightgray',  // Light background for the sidebar
          boxShadow: 2,  // Add shadow to the sidebar
        }}
      >
        <Box
          sx={{
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            gap: 2,
          }}
        >
          {/* Sidebar Menu Items */}
          <ListItem button onClick={(e) => handleMenuClick(e, 'user')}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItem>

          {openDropdown === 'user' && (
            <>
              <ListItem button onClick={() => handleClick('/user/view')} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="View" />
              </ListItem>
              <ListItem button onClick={() => handleClick('/user/add')} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Add" />
              </ListItem>
            </>
          )}

          <ListItem button onClick={(e) => handleMenuClick(e, 'products')}>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>

          {openDropdown === 'products' && (
            <>
              <ListItem button onClick={() => handleClick('/products/view')} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="View" />
              </ListItem>
              <ListItem button onClick={() => handleClick('/products/add')} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Add" />
              </ListItem>
            </>
          )}

          <ListItem button onClick={(e) => handleMenuClick(e, 'purchases')}>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Purchases" />
          </ListItem>

          {openDropdown === 'purchases' && (
            <>
              <ListItem button onClick={() => handleClick('/purchases/view')} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="View" />
              </ListItem>
              <ListItem button onClick={() => handleClick('/purchases/add')} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Add" />
              </ListItem>
            </>
          )}

          {/* Settings: No dropdown menu */}
          <ListItem button onClick={() => handleClick('/settings')}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
