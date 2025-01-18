import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';

// Validation Schema
const NoticeSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  date: Yup.date().required('Date is required').typeError('Invalid date'),
});

const NoticeBoard = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setError('');
    try {
      // API Call
      await axios.post('http://localhost:8000/notice/AddToBoard', values);
      setSuccess(true);
      resetForm();
    } catch (err) {
      setError('Failed to add the notice. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Add New Notice
      </Typography>

      {error && (
        <Alert severity="error" sx={{ marginBottom: '20px' }}>
          {error}
        </Alert>
      )}

      <Formik
        initialValues={{
          title: '',
          description: '',
          date: '',
        }}
        validationSchema={NoticeSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            <Field
              as={TextField}
              fullWidth
              name="title"
              label="Title"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />

            <Field
              as={TextField}
              fullWidth
              name="description"
              label="Description"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              onChange={handleChange}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
            />

            <Field
              as={TextField}
              fullWidth
              name="date"
              label="Date"
              variant="outlined"
              margin="normal"
              type="date"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              error={touched.date && Boolean(errors.date)}
              helperText={touched.date && errors.date}
            />

            <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Add Notice'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
        message="Notice added successfully!"
      />
    </Box>
  );
};

export default NoticeBoard;
