import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Avatar, Grid, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const [selectedSection, setSelectedSection] = useState("orders"); // Default to "orders"
    const [productData, setProductData] = useState([]); // Initialize as an empty array

    // Fetch user data when component 
    useEffect(() => {
        const fetchedUserData = {
            profilePicture: 'https://via.placeholder.com/150',
            name: 'Zeeshan Haider',
            age: '24 years',
            username: 'Famehyer',
            email: 'famehyder9999@gail.com',
            dob: '21-08-2003',
            gender: 'Male',
            address: 'post office dambudas'
        };
        setUserData(fetchedUserData);
    }, []);

    // Fetch product data based on the selected section
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`/api/${selectedSection}`);
                // Ensure the data is an array before setting productData
                setProductData(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setProductData([]); // Set to empty array if there's an error
            }
        };

        fetchProductData();
    }, [selectedSection]);

    const handleSectionChange = (event, newSection) => {
        if (newSection !== null) setSelectedSection(newSection);
    };

    return (
        <Box sx={{ p: 3, mt: 12 }}>
            <Grid container spacing={3} justifyContent="center">
                {/* Profile Picture and Basic Info */}
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

                {/* Additional User Details */}
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

            {/* Toggle Button Group for Orders and Favorites */}
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

            {/* Display Product Details Based on the Selected Section */}
            <Box sx={{ mt: 3 }}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6">
                        {selectedSection === 'orders' ? 'My Orders' : 'My Favorite Products'}
                    </Typography>

                    {/* Product List */}
                    {productData.length > 0 ? (
                        productData.map((product, index) => (
                            <Box key={index} sx={{ mt: 2, p: 1, borderBottom: '1px solid #e0e0e0' }}>
                                <Typography variant="subtitle1"><strong>Product Name:</strong> {product.name}</Typography>
                                <Typography variant="body2"><strong>Price:</strong> ${product.price}</Typography>
                                <Typography variant="body2"><strong>Quantity:</strong> {product.quantity}</Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            No products found in {selectedSection}.
                        </Typography>
                    )}
                </Paper>
            </Box>
        </Box>
    );
};

export default UserProfile;
