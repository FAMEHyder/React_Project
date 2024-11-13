import { useState } from 'react';
import { Box, AppBar, Toolbar, Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, Storefront, ShoppingCart, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Cl from '../image/CompanyLogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  const [openDropdown, setOpenDropdown] = useState('');

  const handleClick = (path) => {
    navigate(path);
  };

  const handleMenuClick = (event, item) => {
    if (openDropdown === item) {
      setOpenDropdown('');
    } else {
      setOpenDropdown(item);
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
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ padding: '8px', bgcolor: 'green', height: '70px' }}>
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
            <Button sx={{ color: 'white', mr: 5 }} onClick={() => handleClick('/signup')}>
              Sign Up
            </Button>
            <Button sx={{ color: 'white', mr: 5 }} onClick={() => handleClick('/signin')}>
              Sign In
            </Button>
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
          height: 'calc(100vh - 70px)',  // Full height minus navbar height
          bgcolor: 'lightgray',
          boxShadow: 2,
          overflowY: 'auto',  // Enables scrolling for the sidebar
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
      
      {/* Offset for content below the fixed navbar */}
      <Box sx={{ marginTop: '70px' }}></Box>
    </>
  );
};

export default Navbar;
