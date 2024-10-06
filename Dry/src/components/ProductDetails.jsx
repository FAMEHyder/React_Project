import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useCart } from '../context/Cart';

const ProductDetails = () => {
    const navigate = useNavigate();
    const { cart, addItem } = useCart();
    const location = useLocation();
    const { product } = location.state || {}; // Access product data from location state

    // State to handle the quantity of product in kg
    const [quantity, setQuantity] = useState(1); // Default quantity is 1kg

    if (!product) {
        return <Typography variant="h6" align="center">No product details available</Typography>;
    }

    // Function to handle quantity increment
    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    // Function to handle quantity decrement
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    // Function to handle adding product to cart
    const handlecartclick = () => {
        alert(`Added ${quantity} kg to cart successfully`);
        addItem({ ...product, quantity });
    };

    // Function to handle navigation to order form
    const handleclick = (path) => {
        navigate(path);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 20, boxShadow: 5 }}>
            <Card>
                <Grid container spacing={2}>
                    {/* Product Image */}
                    <Grid item xs={12} sm={6}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={product.image}
                            alt={product.name}
                            sx={{ objectFit: 'contain' }}
                        />
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} sm={6}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                {product.name}
                            </Typography>

                            <Typography variant="body1" paragraph>
                                {product.description}
                            </Typography>

                            <Typography variant="h6" color="primary" gutterBottom>
                                Price: ${product.price} /200g
                            </Typography>

                            {/* Quantity Counter */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                <IconButton onClick={decreaseQuantity} color="secondary">
                                    <Remove />
                                </IconButton>
                                <Typography variant="h6" sx={{ mx: 2 }}>
                                    {quantity} g
                                </Typography>
                                <IconButton onClick={increaseQuantity} color="primary">
                                    <Add />
                                </IconButton>
                            </div>

                            {/* Buttons for actions */}
                            <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handlecartclick}>
                                Add to Cart
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => handleclick('/OrderForm')}>
                                Buy Now
                            </Button>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>

            {/* You can add related products or other details below */}
        </Container>
    );
};

export default ProductDetails;
