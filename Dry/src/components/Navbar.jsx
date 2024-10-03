import { AppBar, Toolbar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCart } from '../context/Cart'; // Import the CartContext hook
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, Typography } from '@mui/material';
import { useState } from 'react';
import Cl from '../Image/CompanyLogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, deleteItem } = useCart();
  const [open, setOpen] = useState(false); // State to manage the dialog

  const handleClick = (path) => {
    navigate(path);
  };

  // Deleting the item from the cart
  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  // Function to open dialog
  const handleOpenDialog = () => {
    setOpen(true);
  };

  // Function to close dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar sx={{ backgroundColor: 'gray' }}>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, marginLeft: 120,backgroundColor: 'green' }}>

          <Button color="inherit" onClick={() => handleClick('/Signin')}>Sign In</Button>
          <Button color="inherit" onClick={() => handleClick('/Signup')}>Sign Up</Button>
          <Button color="inherit" onClick={() => handleOpenDialog()}> <ShoppingCartIcon /></Button>
          <Button color="inherit" onClick={() => handleOpenDialog()}> <CheckCircleIcon /></Button>


        </Box>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>


          <Box
            onClick={() => handleClick('/')}
            sx={{
              paddingX: { xs: 2, sm: 4, md: 8 },
              // flex: 1,
              cursor: 'pointer',
              backgroundImage: `url(${Cl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              height: 40,
              width: '150px',
              marginRight:10,
              transform: 'scale(3.9)',      // Scale the image to appear larger
              transformOrigin: 'left',

            }}
          >

          </Box>

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
      {/* MUI Dialog */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Cart Items</DialogTitle>
        <DialogContent>
          {/* List of Cart Items */}
          <List>
            {cart.map((item) => (
              <ListItem key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                {/* Display item image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 50, height: 50, marginRight: '16px' }} // Adjust size and spacing
                />

                {/* Display item details */}
                <Typography variant="body1">
                  {item.name} - ${item.price}
                </Typography>

                {/* Delete button */}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteItem(item.id)}
                  style={{ marginLeft: 'auto' }}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>


    </>
  );
};

export default Navbar;
