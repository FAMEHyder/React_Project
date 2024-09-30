import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems } = useCart(); // Get cart items from CartContext

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom align="center">
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center">
          Your cart is empty.
        </Typography>
      ) : (
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.name}
                secondary={`Price: $${item.price}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Cart;
