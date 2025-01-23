import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Box, TextField, Button, Typography, Grid, Container } from "@mui/material";

// Validation schema
const validationSchema = Yup.object({
  rollno: Yup.number().required("Roll No is required"),
  examinationYear: Yup.number()
    .required("Examination Year is required")
    .min(1900, "Year must be after 1900")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  mathScience: Yup.number()
    .required("Math Science marks are required")
    .min(0, "Minimum 0")
    .max(100, "Maximum 100"),
  biology: Yup.number()
    .required("Biology marks are required")
    .min(0, "Minimum 0")
    .max(100),
  physics: Yup.number()
    .required("Physics marks are required")
    .min(0, "Minimum 0")
    .max(100),
  chemistry: Yup.number()
    .required("Chemistry marks are required")
    .min(0, "Minimum 0")
    .max(100),
  english: Yup.number()
    .required("English marks are required")
    .min(0, "Minimum 0")
    .max(100),
});

const ScienceResult = () => {
  const location = useLocation();
  const { userId } = location.state || {};

  const formik = useFormik({
    initialValues: {
      rollno: "",
      examinationYear: "",
      mathScience: "",
      biology: "",
      physics: "",
      chemistry: "",
      english: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Add default subject data to the payload
        const payload = {
          ...values,
          Subject1: "English Compulsory",
          Subject2: "Mathematics",
          Subject3: "Physics",
          Subject4: "Chemistry",
          Subject5: "Biology",
        };

        const response = await axios.post(
          `http://localhost:8000/user/marksheet/${userId}`,
          payload
        );
        console.log("Response:", response.data);
        alert("Marksheet submitted successfully!");
        resetForm();
      } catch (error) {
        console.error("Error submitting marksheet:", error);
        alert("Failed to submit marksheet. Please try again.");
      }
    },
  });

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          mt: 2,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2, textAlign: "center" }}>
          Add Roll Number And Examination Year
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            {/* Roll No and Examination Year */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="rollno"
                name="rollno"
                type="number"
                label="Roll No"
                value={formik.values.rollno}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.rollno && Boolean(formik.errors.rollno)}
                helperText={formik.touched.rollno && formik.errors.rollno}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="examinationYear"
                name="examinationYear"
                label="Examination Year"
                value={formik.values.examinationYear}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.examinationYear &&
                  Boolean(formik.errors.examinationYear)
                }
                helperText={
                  formik.touched.examinationYear && formik.errors.examinationYear
                }
                type="number"
              />
            </Grid>

            {/* Section for subject marks */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{ marginTop: 3, marginBottom: 2, textAlign: "center" }}
              >
                Add Marks in Subjects
              </Typography>
            </Grid>

            {/* Subject Fields */}
            {["mathScience", "biology", "physics", "chemistry", "english"].map(
              (field) => (
                <Grid item xs={12} sm={6} key={field}>
                  <TextField
                    fullWidth
                    id={field}
                    name={field}
                    label={field
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched[field] && Boolean(formik.errors[field])
                    }
                    helperText={formik.touched[field] && formik.errors[field]}
                    type="number"
                  />
                </Grid>
              )
            )}
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
