import { Container, TextField, Button, Box, Typography, Grid, Paper, CardMedia } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom"; // To receive product details from location state
import { useCart } from "../context/Cart";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const navigate = useNavigate();

  // Get product details passed from the Cart component
  const location = useLocation();
  const { item } = location.state || {}; // Access product details from location
  const { cart } = useCart();
  
  const formik = useFormik({
    initialValues: {
      RecipientName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      phone: "",
      shippingMethod: "",
      shippingCost: "",
      estimatedDeliveryDate: "",
    },
    validationSchema: Yup.object({
      RecipientName: Yup.string().required("Recipient Name is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      postalCode: Yup.string().required("Postal Code is required"),
      country: Yup.string().required("Country is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
      shippingMethod: Yup.string().required("Shipping Method is required"),
      shippingCost: Yup.number().required("Shipping Cost is required").min(0, "Shipping Cost must be positive"),
      estimatedDeliveryDate: Yup.date().required("Estimated Delivery Date is required"),
    }),
    onSubmit: (values) => {
      // Pass both the order form details and product details to the Payment component
      navigate(`/payment`, { 
        state: { 
          orderDetails: values,  // Pass form data
          product: item || cart  // Pass either single item or cart items
        } 
      }); 
    },
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <Grid container spacing={4}>
        {/* Left Side - Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              p: 3,
              backgroundColor: "white",
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="h5" textAlign="center" fontFamily={"Cambria"} fontWeight="bold" gutterBottom>
              Order Form
            </Typography>

            <TextField
              fullWidth
              id="RecipientName"
              name="RecipientName"
              label="Recipient Name"
              value={formik.values.RecipientName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.RecipientName && Boolean(formik.errors.RecipientName)}
              helperText={formik.touched.RecipientName && formik.errors.RecipientName}
            />

            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />

            <TextField
              fullWidth
              id="city"
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />

            <TextField
              fullWidth
              id="postalCode"
              name="postalCode"
              label="Postal Code"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
              helperText={formik.touched.postalCode && formik.errors.postalCode}
            />

            <TextField
              fullWidth
              id="country"
              name="country"
              label="Country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />

            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />

            <TextField
              fullWidth
              id="shippingMethod"
              name="shippingMethod"
              label="Shipping Method"
              value={formik.values.shippingMethod}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.shippingMethod && Boolean(formik.errors.shippingMethod)}
              helperText={formik.touched.shippingMethod && formik.errors.shippingMethod}
            />

            <TextField
              fullWidth
              id="shippingCost"
              name="shippingCost"
              label="Shipping Cost"
              type="number"
              value={formik.values.shippingCost}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.shippingCost && Boolean(formik.errors.shippingCost)}
              helperText={formik.touched.shippingCost && formik.errors.shippingCost}
            />

            <TextField
              fullWidth
              id="estimatedDeliveryDate"
              name="estimatedDeliveryDate"
              label="Estimated Delivery Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.estimatedDeliveryDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.estimatedDeliveryDate && Boolean(formik.errors.estimatedDeliveryDate)}
              helperText={formik.touched.estimatedDeliveryDate && formik.errors.estimatedDeliveryDate}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Continue to Payment
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Product Details */}
        <Grid item xs={12} md={6}>
          {cart || item ? (
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Order Review:
              </Typography>
              {cart &&

                cart.map((product) => (
                  <>
                    {/* Display Product Image */}
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'contain', margin: '0 auto' }}
                    />

                    <Typography variant="body1">
                      <strong>Name:</strong> {product.name}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Price:</strong> ${product.subCategory.price}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Quantity:</strong> {product.Category.weight}g
                    </Typography>
                  </>
                ))}

              {item && (
                <>
                  {/* Display Product Image */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    sx={{ objectFit: 'contain', margin: '0 auto' }}
                  />

                  <Typography variant="body1">
                    <strong>Name:</strong> {item.name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Price:</strong> ${item.subCategory.price}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Quantity:</strong> {item.subCategory.weight}g
                  </Typography>
                </>
              )}
            </Paper>
          ) : (
            <Typography variant="h6" color="error">
              No product details available.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderForm;
