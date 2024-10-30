import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, Grid, Skeleton } from '@mui/material';

const PaymentForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay, e.g., fetching initial data
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const validationSchema = Yup.object({
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
      cardNumber: '',
      cvvCode: '',
      cardHolderName: '',
      expiryDate: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Payment Details:', values);
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ p: 3, width: '100%', maxWidth: 600, margin: '0 auto',mt:12 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {loading ? <Skeleton width="40%" /> : 'Payment Details'}
      </Typography>

      <Grid container spacing={2}>
        {loading ? (
          Array.from(new Array(4)).map((_, index) => (
            <Grid item xs={12} sm={index % 2 === 0 ? 12 : 6} key={index}>
              <Skeleton variant="rectangular" height={56} />
            </Grid>
          ))
        ) : (
          <>
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
              Submit Payment
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentForm;
