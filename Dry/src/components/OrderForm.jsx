import { useState } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const OrderForm = () => {
  const [submitted, setSubmitted] = useState(false);

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
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom>
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

        <Button variant="contained" color="primary" type="submit">
          Submit Order
        </Button>

        {submitted && (
          <Typography variant="body1" color="green" textAlign="center">
            Order submitted successfully!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default OrderForm;
