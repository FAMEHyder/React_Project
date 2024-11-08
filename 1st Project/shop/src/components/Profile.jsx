import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthStore } from '../authContext/auth';
import {
    Box,
    Typography,
    Avatar,
    Grid,
    Paper,
    ToggleButton,
    ToggleButtonGroup,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Skeleton,
} from '@mui/material';

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const [selectedSection, setSelectedSection] = useState("orders");
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, userId } = useAuthStore();

    useEffect(() => {
        const fetchedUserData = {
            profilePicture: 'https://via.placeholder.com/150',
            name: user.firstName,
            age: user.age,
            username: user.username,
            email: user.email,
            dob: user.DOB,
            gender: 'Male',
            address: user.address,
            user: user.id,
        };
        setUserData(fetchedUserData);
    }, []);

    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8000/purchase/purchase/${userId}`);
                setProductData(Array.isArray(response.data.detail) ? response.data.detail : []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setProductData([]);
            } finally {
                setLoading(false);
            }
        };

        if (selectedSection === "orders") fetchProductData();
    }, [selectedSection, userId]);

    const handleSectionChange = (event, newSection) => {
        if (newSection !== null) setSelectedSection(newSection);
    };

    return (
        <Box sx={{ p: 3, mt: 10 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center' }} elevation={3}>
                        <Avatar
                            alt="Profile Picture"
                            src={userData.profilePicture}
                            sx={{ width: 150, height: 150, mx: 'auto' }}
                        />
                        <Typography variant="h5" sx={{ mt: 2 }}>{userData.name}</Typography>
                        <Typography variant="subtitle1">@{userData.username}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }} elevation={3}>
                        {[
                            { label: 'Name', value: userData.name },
                            { label: 'Age', value: userData.age },
                            { label: 'Username', value: userData.username },
                            { label: 'Email', value: userData.email },
                            { label: 'DOB', value: userData.dob },
                            { label: 'Gender', value: userData.gender },
                            { label: 'Address', value: userData.address },
                        ].map((item, index) => (
                            <Typography key={index} variant="body1" gutterBottom>
                                <strong>{item.label}:</strong> {item.value}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <ToggleButtonGroup
                    value={selectedSection}
                    exclusive
                    onChange={handleSectionChange}
                >
                    <ToggleButton
                        value="orders"
                        sx={{
                            textTransform: 'none',
                            bgcolor: 'blue', // Color for "My Orders"
                            color: '#fff',
                            '&.Mui-selected': {
                                bgcolor: 'darkblue', // Selected color for "My Orders"
                                color: '#fff',
                            },
                            '&:hover': {
                                bgcolor: 'blue',
                                opacity: 0.9,
                            },
                        }}
                    >
                        My Orders
                    </ToggleButton>
                    <ToggleButton
                        value="favorites"
                        sx={{
                            textTransform: 'none',
                            bgcolor: 'purple', // Color for "My Favorite Products"
                            color: '#fff',
                            '&.Mui-selected': {
                                bgcolor: 'darkpurple', // Selected color for "My Favorite Products"
                                color: '#fff',
                            },
                            '&:hover': {
                                bgcolor: 'purple',
                                opacity: 0.9,
                            },
                        }}
                    >
                        My Favorite Products
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" ml= {70} fontWeight={800}>
                        {selectedSection === 'orders' ? 'My Orders' : 'My Favorite Products'}
                    </Typography>

                    {loading ? (
                        <Box>
                            {[...Array(5)].map((_, index) => (
                                <Skeleton key={index} variant="rectangular" height={40} sx={{ mb: 2 }} />
                            ))}
                        </Box>
                    ) : (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, border: '1px solid rgba(224, 224, 224, 1)' }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"><strong>Product Image</strong></TableCell>
                                        <TableCell align="center"><strong>Product Name</strong></TableCell>
                                        <TableCell align="center"><strong>Category</strong></TableCell>
                                        <TableCell align="center"><strong>Product ID</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productData.length > 0 ? (
                                        productData.map((product, index) => (
                                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell align="center">
                                                    <Avatar src={product.productDetail.images} alt="Product Image" />
                                                </TableCell>
                                                <TableCell align="center">{product.productDetail.name}</TableCell>
                                                <TableCell align="center">{product.productDetail.category}</TableCell>
                                                <TableCell align="center">{product.productDetail.productId}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={4}>
                                                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                                                    No products found in {selectedSection}.
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Paper>
            </Box>
        </Box>
    );
};

export default UserProfile;
