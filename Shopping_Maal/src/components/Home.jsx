import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, AppBar, Toolbar, Button, Container, Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesToShow = 1;  // Show only one card at a time
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleNext = () => {
        setCurrentSlide(prev => (prev + 1) % Math.ceil(products.length / slidesToShow));
    };

    const handlePrev = () => {
        setCurrentSlide(prev => (prev - 1 + Math.ceil(products.length / slidesToShow)) % Math.ceil(products.length / slidesToShow));
    };

    return (
        <Container maxWidth={false} sx={{ padding: 0 }}>
            <AppBar position="fixed" sx={{ width: '100%' }}>
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
                    height: 600,
                    width: '100%',
                    backgroundImage: 'url(https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM=)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '64px', // Adjust if the AppBar height is different
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
                            overflow: 'hidden',
                            flexDirection: 'row',
                            width: '100%',
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        <Card sx={{
                            width: '50%', height: 245, margin: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                            '&:hover': {
                                transform: 'scale(1.05)', // Slightly increase the card size
                                boxShadow: 6, // Add a shadow on hover
                            },
                        }} onClick={() => navigate('/jewelries')}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                                image="https://c7.alamy.com/comp/DNT2XP/gold-jewelry-little-india-singapore-DNT2XP.jpg"
                                alt="jewelries"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">Jewelries</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            width: '50%', height: 245, margin: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                            '&:hover': {
                                transform: 'scale(1.05)', // Slightly increase the card size
                                boxShadow: 6, // Add a shadow on hover
                            },
                        }} onClick={() => navigate('/womens-clothing')}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                                image="https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=1024x1024&w=is&k=20&c=m_-tKfvNIumZYwW9V_3JO6ulWMPRLhPvXX0gsbJAe58="
                                alt="Cloths for women"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">Cloths for Women</Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{
                            width: '50%', height: 245, margin: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                            '&:hover': {
                                transform: 'scale(1.05)', // Slightly increase the card size
                                boxShadow: 6, // Add a shadow on hover
                            },
                        }} onClick={() => navigate('/mens-clothing')}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                                image="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.webp?s=1024x1024&w=is&k=20&c=ljpyNgsm90gjZHYRuHWfLXU-PTZk7IERjJW5v3NZ70U="
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

            <footer>
                <Grid container spacing={2}
                    sx={{
                        padding: 3,
                        width: '100%',
                        marginTop: 2,
                        backgroundColor: 'lightgray',

                    }}>
                    <Grid item xs={12} md={4} 
                    sx={{
                        backgroundColor:'gray',
                        borderRadius:'5px',
                        width:'5px',

                    }}>
                        <div className="footer-card" >
                            <Typography variant="h6">About Us</Typography>
                            <Typography variant="body2">
                                Sat_Tara Shopping Maal <br />
                                Near YaadGar Chowk  <br />
                                Skardu <br />
                                Baltistan</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="footer-card">
                            
                            <Typography variant="h6">Contact Us</Typography>
                            <Typography variant="body2">
                                Email : famehyder9999@gmail.com <br />
                                Email : famehyder7777@gmail.com <br />
                                Phone : +923554526991 <br />
                                Phone : +923417405991</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{
                        backgroundColor:'gray',
                        borderRadius:'5px',
                        

                    }}>
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
