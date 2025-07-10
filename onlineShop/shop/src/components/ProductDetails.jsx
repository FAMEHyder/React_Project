import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import { Add, Remove, ShoppingCart, Payment, Favorite } from '@mui/icons-material';
import { useCart } from '../context/Cart';

const ProductDetails = () => {
    const navigate = useNavigate();
    const { addItem } = useCart();
    const location = useLocation();
    const { product } = location.state || {}; // Access product data from location state

    // State to handle the quantity of product in g
    const [quantity, setQuantity] = useState(100); // Default quantity is 100g

    if (!product) {
        return <Typography variant="h6" align="center">No product details available</Typography>;
    }

    // Function to handle quantity increment
    const increaseQuantity = () => {
        setQuantity((prev) => prev + 100);
    };

    // Function to handle quantity decrement
    const decreaseQuantity = () => {
        if (quantity > 100) {
            setQuantity((prev) => prev - 100);
        }
    };

    // Function to handle adding product to cart
    const handlecartclick = () => {
        alert(`Added ${quantity} g to cart successfully`);
        addItem({ ...product, quantity: quantity });
    };

    // Function to handle navigation to order form
    const handleclick = () => {
        const item = { ...product, quantity: quantity }
        navigate('/OrderForm', { state: { item } });
    };
    // { state: { product } }
    return (
        <Container maxWidth="xl" sx={{ mt: 15, bgcolor: 'none' }}>
            <Card sx={{ width: '100%' }}>
                <Grid container spacing={4}>
                    {/* Product Image */}
                    <Grid item xs={12} sm={6}>
                        <CardMedia
                            component="img"
                            height="500"
                            image={product.image}
                            alt={product.name}
                            sx={{ objectFit: 'contain', margin: '0 auto' }}
                        />
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                {product.name}
                            </Typography>

                            <Typography variant="h4" color="red" gutterBottom>
                                Price : ${product.subCategory.price}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" paragraph>
                                {product.description}
                            </Typography>

                            {/* Quantity Counter */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', width: '170px', backgroundColor: 'lightgray', borderRadius: 5 }}>
                                <IconButton onClick={decreaseQuantity} color="secondary">
                                    <Remove />
                                </IconButton>
                                <Typography variant="h6" sx={{ mx: 2 }}>
                                    {product.subCategory.weight=quantity} g
                                </Typography>
                                <IconButton onClick={increaseQuantity} color="primary">
                                    <Add />
                                </IconButton>
                            </div>

                            {/* Icons for Add to Cart, Buy Now, and Like */}
                            <Grid container spacing={1} sx={{ mt: 2, mb: 2, ml: .1, bgcolor: 'lightgray', width: '200px', borderRadius: 2 }}>
                                {/* Add to Cart Icon */}
                                <Grid item xs={4} >
                                    <IconButton
                                        color="success"
                                        sx={{ fontSize: '2rem' }}
                                        onClick={handlecartclick}
                                    >
                                        <ShoppingCart />
                                    </IconButton>
                                </Grid>

                                {/* Buy Now Icon */}
                                <Grid item xs={4}>
                                    <IconButton
                                        color="secondary"
                                        sx={{ fontSize: '2rem' }}
                                        onClick={handleclick}
                                    >
                                        <Payment />
                                    </IconButton>
                                </Grid>

                                {/* Like (Heart) Icon */}
                                <Grid item xs={4}>
                                    <IconButton color="error" sx={{ fontSize: '2rem' }}>
                                        <Favorite />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            {/* Additional details like availability, shipping, and share buttons */}
                            <Grid container sx={{ mt: 4 }}>
                                <Grid item xs={12} sm={6} >
                                    <Typography variant="body1" color="textPrimary">
                                        Stock : {product.subCategory.stock} Kg
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary">
                                        Availability: In Stock
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary">
                                        Shipping: 01 day shipping. <span style={{ color: 'red' }}> Free today </span>
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary">
                                       Price : ${product.subCategory.price} 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>

            </Card>
        </Container>
    );
};

export default ProductDetails;