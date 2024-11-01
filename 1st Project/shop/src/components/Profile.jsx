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
        Skeleton } from '@mui/material';
const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const [selectedSection, setSelectedSection] = useState("orders");
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {user} = useAuthStore();
    console.log("your profile details : ",user)


    useEffect(() => {

        const fetchedUserData = {
            profilePicture: 'https://via.placeholder.com/150',
            name: user.firstName ,
            age: user.age,
            username: user.username,
            email: user.email,
            dob: user.DOB,
            gender: 'Male',
            address: user.address
        };
        setUserData(fetchedUserData);
    }, []);
    
    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8000/purchase/get${user.id}`);
                console.log("Response data:", response.data);    
                setProductData(Array.isArray(response.data) ? response.data : []);
                // console.log("data in productData is : ", productData);
            } catch (error) {
                console.error("Error fetching data:", error);
                setProductData([]);
            } finally {
                setLoading(false);
            }
        };
        
        if (selectedSection === "orders") fetchProductData();
    }, [selectedSection]);

    const handleSectionChange = (event, newSection) => {
        if (newSection !== null) setSelectedSection(newSection);
    };



    return (
        <Box sx={{ p: 3, mt: 12 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }} elevation={3}>
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
                    <Paper sx={{ p: 2 }} elevation={3}>
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
                    sx={{
                        backgroundColor: 'white',
                        border: '1px solid #E7F2EE',
                        '& .Mui-selected': {
                            backgroundColor: 'green',
                            color: '#fff',
                        },
                        '& .MuiToggleButton-root': {
                            textTransform: 'none',
                            bgcolor: 'purple',
                            color: '#fff',
                            '&:hover': {
                                bgcolor: 'purple',
                                opacity: 0.9,
                            },
                        },
                    }}
                >
                    <ToggleButton value="orders">
                        My Orders
                    </ToggleButton>
                    <ToggleButton value="favorites">
                        My Favorite Products
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6">
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
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Product Image</strong></TableCell>
                                        <TableCell><strong>Product Name</strong></TableCell>
                                        <TableCell><strong>Quantity</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {console.log(" your productData is : ", productData)}
                                    {productData.length > 0 ? (
                                        productData.map((product, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{product.image}</TableCell>
                                                <TableCell>${product.name}</TableCell>
                                                <TableCell>{product.quantity}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={3}>
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
