import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocation } from 'react-router-dom';

import { Box, TextField, Button, Typography, Grid, Container } from "@mui/material";

// Validation schema
const validationSchema = Yup.object({
  mathScience: Yup.number().required("Math Science is required").min(0, "Minimum 0").max(100, "Maximum 100"),
  biology: Yup.number().required("Biology is required").min(0, "Minimum 0").max(100, "Maximum 100"),
  physics: Yup.number().required("Physics is required").min(0, "Minimum 0").max(100, "Maximum 100"),
  chemistry: Yup.number().required("Chemistry is required").min(0, "Minimum 0").max(100, "Maximum 100"),
  english: Yup.number().required("English is required").min(0, "Minimum 0").max(100, "Maximum 100"),
  mathArts: Yup.number().required("Math Arts is required").min(0, "Minimum 0").max(100, "Maximum 100"),
  generalScience: Yup.number().required("General Science is required").min(0, "Minimum 0").max(100, "Maximum 100"),
  pakStd: Yup.number().required("Pakistan Studies is required").min(0, "Minimum 0").max(100, "Maximum 100"),
  urdu: Yup.number().required("Urdu is required").min(0, "Minimum 0").max(100, "Maximum 100"),
});

const ScienceResult = () => {
    const location = useLocation();
    const { userId } = location.state || {}; 
    console.log(" your userId in marksheet form is :", userId);
  const formik = useFormik({
    initialValues: {
      mathScience: "",
      biology: "",
      physics: "",
      chemistry: "",
      english: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:8000/marksheet/createmarksheet", values);
        console.log("Response:", response.data);
        alert("Marksheet submitted successfully!");
        resetForm(); // Reset the form after successful submission
      } catch (error) {
        console.error("Error submitting marksheet:", error);
        alert("Failed to submit marksheet. Please try again.");
      }
    },
  });

  return (
    <Container maxWidth="md" >
      <Box sx={{ padding: 4, backgroundColor: "white", borderRadius: 2, boxShadow: 3 ,mt:2 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
         Add Numbers to Marksheet
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            {Object.keys(formik.initialValues).map((field) => (
              <Grid item xs={12} sm={6} key={field}>
                <TextField
                  fullWidth
                  id={field}
                  name={field}
                  label={field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                  type="number"
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ marginTop: 3, textAlign: "center" }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ScienceResult;
