import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  
  Skeleton,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
  Button,
} from '@mui/material';
import { AddPhotoAlternate, Description,  AttachMoney, VpnKey, Warehouse, Build, CameraAlt } from '@mui/icons-material';

const ProductForm = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    images: '',
    category: '',
    subCategory: '',
    price: '',
    sku: '',
    weight: '',
    stock: '',
    brand: ''
  });

  useEffect(() => {
    // Simulating loading
    setTimeout(() => {
      setLoading(false); // Stop loading after simulating data fetch
    }, 2000); // Simulate delay
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box sx={{ p: 3, mt: 12, ml: { xs: 0, sm: 0, md: '250px' } }}> {/* Sidebar offset */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }} elevation={3}>
            <Typography variant="h5" gutterBottom>Create Product</Typography>

            {/* Name Field */}
            <TextField
              label="Product Name"
              name="name"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              InputProps={{
                startAdornment: loading ? <Skeleton variant="circular" width={24} height={24} /> : <InputAdornment position="start"><AddPhotoAlternate /></InputAdornment>,
              }}
              sx={{ mb: 2 }}
              disabled={loading}
            />

            {/* Description Field */}
            <TextField
              label="Description"
              name="description"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              InputProps={{
                startAdornment: loading ? <Skeleton variant="circular" width={24} height={24} /> : <InputAdornment position="start"><Description /></InputAdornment>,
              }}
              sx={{ mb: 2 }}
              disabled={loading}
            />

            {/* Images Field */}
            <TextField
              label="Product Images (URLs)"
              name="images"
              fullWidth
              variant="outlined"
              value={formData.images}
              onChange={handleChange}
              InputProps={{
                startAdornment: loading ? <Skeleton variant="circular" width={24} height={24} /> : <InputAdornment position="start"><CameraAlt /></InputAdornment>,
              }}
              sx={{ mb: 2 }}
              disabled={loading}
            />

            {/* Category Field */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Category</InputLabel>
              <Select
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={loading}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="home">Home</MenuItem>
              </Select>
            </FormControl>

            {/* SubCategory Field */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>SubCategory</InputLabel>
              <Select
                label="SubCategory"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                disabled={loading}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="subCategory1">SubCategory 1</MenuItem>
                <MenuItem value="subCategory2">SubCategory 2</MenuItem>
              </Select>
            </FormControl>

            {/* Price Field */}
            <TextField
              label="Price"
              name="price"
              fullWidth
              variant="outlined"
              type="number"
              value={formData.price}
              onChange={handleChange}
              InputProps={{
                startAdornment: loading ? <Skeleton variant="circular" width={24} height={24} /> : <InputAdornment position="start"><AttachMoney /></InputAdornment>,
              }}
              sx={{ mb: 2 }}
              disabled={loading}
            />

            {/* SKU Field */}
            <TextField
              label="SKU"
              name="sku"
              fullWidth
              variant="outlined"
              value={formData.sku}
              onChange={handleChange}
              InputProps={{
                startAdornment: loading ? <Skeleton variant="circular" width={24} height={24} /> : <InputAdornment position="start"><VpnKey /></InputAdornment>,
              }}
              sx={{ mb: 2 }}
              disabled={loading}
            />

            {/* Weight Field */}
            <TextField
              label="Weight"
              name="weight"
              fullWidth
              variant="outlined"
              value={formData.weight}
              onChange={handleChange}
              InputProps={{
                startAdornment: loading ? <Skeleton variant="circular" width={24} height={24} /> : <InputAdornment position="start"><Warehouse /></InputAdornment>,
              }}
              sx={{ mb: 2 }}
              disabled={loading}
            />

            {/* Stock Field */}
            <TextField
              label="Stock"
              name="stock"
              fullWidth
              variant="outlined"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              InputProps={{
                startAdornment: loading ? <Skeleton variant="circular" width={24} height={24} /> : <InputAdornment position="start"><Build /></InputAdornment>,
              }}
              sx={{ mb: 2 }}
              disabled={loading}
            />

            {/* Brand Field */}
            <TextField
              label="Brand"
              name="brand"
              fullWidth
              variant="outlined"
              value={formData.brand}
              onChange={handleChange}
              InputProps={{
                startAdornment: loading ? <Skeleton variant="circular" width={24} height={24} /> : <InputAdornment position="start"><Build /></InputAdornment>,
              }}
              sx={{ mb: 2 }}
              disabled={loading}
            />

            {/* Submit Button */}
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <CircularProgress />
              </Box>
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert('Product Created')}
                >
                  Submit
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductForm;
