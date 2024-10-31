import { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, Grid, Skeleton, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useLocation } from 'react-router-dom';

const PaymentForm = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state for handling API errors
  const location = useLocation();
  const { orderDetails, product } = location.state;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const validationSchema = Yup.object({
    paymentMethod: Yup.string().required('Please select a payment method'),
    cardNumber: Yup.string()
      .required('Card number is required')
      .matches(/^[0-9]{16}$/, 'Card number must be 16 digits'),
    cvvCode: Yup.string()
      .required('CVV is required')
      .matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
    cardHolderName: Yup.string()
      .required('Cardholder name is required')
      .min(3, 'Name must be at least 3 characters'),
    expiryDate: Yup.date()
      .required('Expiry date is required')
      .min(new Date(), 'Expiry date cannot be in the past')
  });

  const formik = useFormik({
    initialValues: {
      paymentMethod: '',
      cardNumber: '',
      cvvCode: '',
      cardHolderName: '',
      expiryDate: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:8000/purchase/', {
          userId: '671ca3e5af7e4d17167431a2', // Example user ID
          paymentDetails: values,
          orderDetails,
          product,
        });
        console.log('Order placed successfully:', response.data);
        // Redirect to success page or show success message here
      } catch (err) {
        console.error('Error placing order:', err);
        setError('Failed to place order. Please try again later.');
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ p: 3, width: '100%', maxWidth: 600, margin: '0 auto', mt: 12 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {loading ? <Skeleton width="40%" /> : 'Payment Details'}
      </Typography>

      {error && <Typography color="error" align="center">{error}</Typography>}

      <Grid container spacing={2}>
        {loading ? (
          Array.from(new Array(5)).map((_, index) => (
            <Grid item xs={12} sm={index % 2 === 0 ? 12 : 6} key={index}>
              <Skeleton variant="rectangular" height={56} />
            </Grid>
          ))
        ) : (
          <>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="paymentMethod-label">Payment Method</InputLabel>
                <Select
                  labelId="paymentMethod-label"
                  id="paymentMethod"
                  name="paymentMethod"
                  label="Payment Method"
                  value={formik.values.paymentMethod}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.paymentMethod && Boolean(formik.errors.paymentMethod)}
                >
                  <MenuItem value="Credit Card">Credit Card</MenuItem>
                  <MenuItem value="Debit Card">Debit Card</MenuItem>
                  <MenuItem value="PayPal">PayPal</MenuItem>
                  <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                </Select>
                {formik.touched.paymentMethod && formik.errors.paymentMethod && (
                  <Typography color="error">{formik.errors.paymentMethod}</Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                variant="outlined"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                helperText={formik.touched.cardNumber && formik.errors.cardNumber}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="cvvCode"
                name="cvvCode"
                label="CVV"
                variant="outlined"
                type="password"
                value={formik.values.cvvCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cvvCode && Boolean(formik.errors.cvvCode)}
                helperText={formik.touched.cvvCode && formik.errors.cvvCode}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="expiryDate"
                name="expiryDate"
                label="Expiry Date"
                variant="outlined"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                value={formik.values.expiryDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
                helperText={formik.touched.expiryDate && formik.errors.expiryDate}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="cardHolderName"
                name="cardHolderName"
                label="Cardholder Name"
                variant="outlined"
                value={formik.values.cardHolderName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cardHolderName && Boolean(formik.errors.cardHolderName)}
                helperText={formik.touched.cardHolderName && formik.errors.cardHolderName}
              />
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          {loading ? (
            <Skeleton variant="rectangular" height={56} />
          ) : (
            <Button color="primary" variant="contained" fullWidth type="submit">
              Place Order
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentForm;
