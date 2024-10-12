// CartComp.jsx
import { Button } from '@mui/material';
import { useCart } from '../context/Cart'; // Import the CartContext hook
import {
  List,
  ListItem,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate for navigation

const CartComp = () => {
  const { cart, deleteItem } = useCart();
//   console.log("cart", cart)
  const navigate = useNavigate();

  // Deleting the item from the cart
  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  // Proceed to Checkout with cart data
  const handleClick = () => {
    navigate('/OrderForm'); // Pass cart data as state
  };

  return (
    <Container sx={{ padding: '2rem', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart ({cart.length} items)
      </Typography>
      {/* Check if cart is empty */}
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <List>
          {cart.map((item) => (
            <ListItem
              key={item.id}
              sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
            >
              {/* Display item image */}
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 50, height: 50, marginRight: '16px' }} // Adjust size and spacing
              />
              {/* Display item details */}
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                {item.name} - ${item.price}
              </Typography>
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                {item.quantity} g
              </Typography>
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                Total:{(item.price*item.quantity)/100}
              </Typography>

              {/* Delete button */}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteItem(item.id)}
                sx={{ marginRight: '1rem' }} // Add some margin for spacing
              >
                Delete
              </Button>

              {/* Buy Now button using Link */}
              <Link to={`/product/${item.id}`}>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
      {/* Proceed to Checkout Button */}
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default CartComp;
