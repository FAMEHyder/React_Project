import { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Button, ListItem, ListItemIcon, ListItemText, Skeleton } from '@mui/material';
import { AccountCircle, Storefront, ShoppingCart, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Cl from '../image/CompanyLogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState('');
  const [loading, setLoading] = useState(true); // For skeleton loading

  const handleClick = (path) => navigate(path);

  const handleMenuClick = (item) => {
    setOpenDropdown((prev) => (prev === item ? '' : item));
  };

  useEffect(() => {
    // Simulate a loading period for skeletons
    const timer = setTimeout(() => setLoading(false), 2000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ bgcolor: 'green', height: '70px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: { xs: 1, sm: 2, md: 4 } }}>
          {/* Left Logo */}
          <Box
            sx={{
              cursor: 'pointer',
              height: 60,
              width: 120,
              backgroundColor: loading ? 'transparent' : undefined,
            }}
          >
            {loading ? (
              <Skeleton variant="rectangular" height={60} width={120} />
            ) : (
              <Box
                onClick={() => handleClick('/')}
                sx={{
                  backgroundImage: `url(${Cl})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
          </Box>

          {/* Right Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {loading ? (
              <>
                <Skeleton variant="text" width={80} height={30} />
                <Skeleton variant="text" width={80} height={30} />
                <Skeleton variant="circular" width={40} height={40} />
              </>
            ) : (
              <>
                <Button sx={{ color: 'white' }} onClick={() => handleClick('/signup')}>
                  Sign Up
                </Button>
                <Button sx={{ color: 'white' }} onClick={() => handleClick('/signin')}>
                  Sign In
                </Button>
                <Button sx={{ color: 'white' }} onClick={() => handleClick('/profile')}>
                  <AccountCircle fontSize="large" />
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '250px',
          height: 'calc(100vh - 70px)',
          bgcolor: 'lightgray',
          boxShadow: 2,
          overflowY: 'auto',
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: 2 }}>
          {loading ? (
            <>
              <Skeleton variant="rectangular" height={40} sx={{ marginBottom: 2 }} />
              <Skeleton variant="rectangular" height={40} sx={{ marginBottom: 2 }} />
              <Skeleton variant="rectangular" height={40} sx={{ marginBottom: 2 }} />
            </>
          ) : (
            <>
              {/* User Section */}
              <ListItem button onClick={() => handleMenuClick('user')}>
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

              {/* Products Section */}
              <ListItem button onClick={() => handleMenuClick('products')}>
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

              {/* Purchases Section */}
              <ListItem button onClick={() => handleMenuClick('purchases')}>
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

              {/* Settings */}
              <ListItem button onClick={() => handleClick('/settings')}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </>
          )}
        </Box>
      </Box>

      {/* Content Offset for Navbar */}
      <Box sx={{ marginTop: '70px' }}></Box>
    </>
  );
};

export default Navbar;
