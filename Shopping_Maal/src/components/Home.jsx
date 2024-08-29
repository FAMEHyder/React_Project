import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, AppBar, Toolbar, Button, Container, Skeleton, Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesToShow = 3;
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/product/${id}`);
    };

    const handleNext = () => {
        setCurrentSlide(prev => (prev + 1) % (products.length / slidesToShow));
    };

    const handlePrev = () => {
        setCurrentSlide(prev => (prev - 1 + (products.length / slidesToShow)) % (products.length / slidesToShow));
    };

    const getVisibleSlides = () => {
        return products.slice(currentSlide * slidesToShow, currentSlide * slidesToShow + slidesToShow);
    };

    return (
        <Container maxWidth='lg' sx={{ padding: 0 }}>
            <AppBar sx={{ width: '100%' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Sat_Tara
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/jewelries')}>Jewelries</Button>
                    <Button color="inherit" onClick={() => navigate('/womens-clothing')}>Cloths for Women</Button>
                    <Button color="inherit" onClick={() => navigate('/mens-clothing')}>Cloths for Men</Button>
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    position: 'relative',
                    height: 600, // Adjust height as needed
                    width: '100%',
                    backgroundImage: 'url(https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM=)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <IconButton
                        sx={{ position: 'absolute', left: 0, zIndex: 1 }}
                        onClick={handlePrev}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    <Box
                        sx={{
                            display: 'flex',
                            width: 'auto',
                            overflow: 'hidden',
                            height: 'auto',
                            flexDirection: 'row',
                            transform: `translateX(-${currentSlide * 33.33}%)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        <Card sx={{ width: 150, margin: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => navigate('/jewelries')}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 100, objectFit: 'cover' }} // Adjust the width and height as needed
                                image="https://c7.alamy.com/comp/DNT2XP/gold-jewelry-little-india-singapore-DNT2XP.jpg" // Replace with your image URL
                                alt="jewelries"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">jewelries</Typography>
                            </CardContent>
                        </Card>


                        <Card sx={{ width: 150, margin: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => navigate('/womens-clothing')}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 100, objectFit: 'cover' }} // Adjust the width and height as needed
                                image="https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=1024x1024&w=is&k=20&c=m_-tKfvNIumZYwW9V_3JO6ulWMPRLhPvXX0gsbJAe58=" // Replace with your image URL
                                alt="Cloths for women"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">Cloths for women</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ width: 150, margin: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => navigate('/mens-clothing')}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 100, objectFit: 'cover' }} // Adjust the width and height as needed
                                image="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.webp?s=1024x1024&w=is&k=20&c=ljpyNgsm90gjZHYRuHWfLXU-PTZk7IERjJW5v3NZ70U=" // Replace with your image URL
                                alt="Cloths for Men"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">Cloths for Men</Typography>
                            </CardContent>
                        </Card>

                    </Box>

                    <IconButton
                        sx={{ position: 'absolute', right: 0, zIndex: 1 }}
                        onClick={handleNext}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
            </Box>

            <main>
                <Grid container spacing={2} sx={{ padding: 3 }}>
                    {loading ? (
                        Array.from(new Array(6)).map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Skeleton variant="rectangular" width="100%" height={140} />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Skeleton width="60%" />
                                        <Skeleton width="40%" />
                                        <Skeleton width="80%" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        products.map(product => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <Card onClick={() => handleCardClick(product.id)} sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ height: 200, objectFit: 'contain', width: '100%' }}
                                        image={product.image}
                                        alt={product.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" noWrap>{product.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ${product.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" noWrap>
                                            {product.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            </main>

            <footer>
                <Grid container spacing={2} sx={{ padding: 3 }}>
                    <Grid item xs={12} md={4}>
                        <div className="footer-card">
                            <Typography variant="h6">About Us</Typography>
                            <Typography variant="body2">Learn more about our company and mission.</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="footer-card">
                            <Typography variant="h6">Contact Us</Typography>
                            <Typography variant="body2">Get in touch with us for any inquiries.</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="footer-card">
                            <Typography variant="h6">Join Us</Typography>
                            <Typography variant="body2">Find out how you can be a part of our team.</Typography>
                        </div>
                    </Grid>
                </Grid>
            </footer>
        </Container>
    );
};

export default Home;
