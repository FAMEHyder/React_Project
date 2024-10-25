import { useState } from "react";
import { Container, TextField, Button, Box, Typography, Grid, Paper, CardMedia } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom"; // To receive product details from location state
import { useCart } from "../context/Cart";

const OrderForm = () => {
  const [submitted, setSubmitted] = useState(false);

  // Get product details passed from the Cart component
  const location = useLocation();
  const { item } = location.state || {}; // Access product details from location
  // console.log("item", item)
  const { cart } = useCart()

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      currentAddress: "",
      permanentAddress: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      currentAddress: Yup.string().required("Current address is required"),
      permanentAddress: Yup.string().required("Permanent address is required"),
    }),
    onSubmit: (values) => {
      setSubmitted(true);
      console.log(values);
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
              id="name"
              name="name"
              label="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />

            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              id="currentAddress"
              name="currentAddress"
              label="Current Address"
              multiline
              rows={3}
              value={formik.values.currentAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.currentAddress && Boolean(formik.errors.currentAddress)}
              helperText={formik.touched.currentAddress && formik.errors.currentAddress}
            />

            <TextField
              fullWidth
              id="permanentAddress"
              name="permanentAddress"
              label="Permanent Address"
              multiline
              rows={3}
              value={formik.values.permanentAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.permanentAddress && Boolean(formik.errors.permanentAddress)}
              helperText={formik.touched.permanentAddress && formik.errors.permanentAddress}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit Order
            </Button>

            {submitted && (
              <Typography variant="body1" color="green" textAlign="center" sx={{ mt: 2 }}>
                Your order has been submitted successfully!
              </Typography>
            )}
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
                      <strong>Price:</strong> ${product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Quantity:</strong> {product.quantity}g
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
                    <strong>Price:</strong> ${item.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Quantity:</strong> {item.quantity}g
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
