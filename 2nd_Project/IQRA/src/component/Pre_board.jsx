import { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Box,
  Typography,
  Grid,
  MenuItem,
  Select,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuthStore } from '../authContext/auth';

const steps = [
  'Personal Information',
  'Educational Background',
  'Guardian Information',
  'Payment Information',
];

// Validation Schemas for each step
const validationSchemas = [
  Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    fatherName: Yup.string().required('Father Name is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10,15}$/, 'Invalid phone number')
      .required('Phone number is required'),
    cnic: Yup.string()
      .matches(/^[0-9]{13}$/, 'Invalid CNIC/B-Form (must be 13 digits)')
      .required('CNIC/B-Form is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
  }),
  Yup.object().shape({
    Class: Yup.string().required('Class is required'),
    institution: Yup.string().required('Institution is required'),
    field: Yup.string().required('Field is required'),
  }),
  Yup.object().shape({
    guardianName: Yup.string().required('Guardian Name is required'),
    relationship: Yup.string().required('Relationship is required'),
    guardianPhoneNumber: Yup.string()
      .matches(/^[0-9]{10,15}$/, 'Invalid phone number')
      .required('Phone number is required'),
  }),
  Yup.object().shape({
    images: Yup.mixed()
      .required('Screenshot is required')
      .test('fileSize', 'File size too large (max: 2MB)', (value) => {
        return value && value.size <= 2 * 1024 * 1024;
      })
      .test('fileType', 'Unsupported file type (JPEG/PNG only)', (value) => {
        return value && ['image/jpeg', 'image/png'].includes(value.type);
      }),
  }),
];

// Initial values for all steps
const initialValues = [
  {
    fullName: '',
    fatherName: '',
    phoneNumber: '',
    cnic: '',
    gender: '',
    address: '',
  },
  {
    Class: '',
    institution: '',
    field: '',
  },
  {
    guardianName: '',
    relationship: '',
    guardianPhoneNumber: '',
  },
  {
    images: null,
  },
];

const Pre_board = () => {
  const { userId } = useAuthStore();
  console.log('Your user ID is:', userId);

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialValues);

  const handleNext = (values) => {
    setFormData((prev) => {
      const updated = [...prev];
      updated[activeStep] = values;
      return updated;
    });
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const finalData = formData.reduce((acc, stepData) => ({ ...acc, ...stepData }), {});
    const formDataToSubmit = new FormData();

    // Append all form fields to FormData
    Object.entries(finalData).forEach(([key, value]) => {
      if (key === 'images') {
        formDataToSubmit.append(key, value); // Append the file directly
      } else {
        formDataToSubmit.append(key, value);
      }
    });

    // Append userId to FormData
    formDataToSubmit.append('userId', userId);

    try {
      const response = await axios.post('http://localhost:8000/form/createform', formDataToSubmit, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Form submitted successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
      alert('An error occurred while submitting the form.');
    }
  };

  const renderStepContent = (step) => {
    const fields = [
      [
        { name: 'fullName', label: 'Full Name' },
        { name: 'fatherName', label: 'Father Name' },
        { name: 'phoneNumber', label: 'Phone Number' },
        { name: 'cnic', label: 'CNIC/B-Form' },
        { name: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female'] },
        { name: 'address', label: 'Address' },
      ],
      [
        { name: 'Class', label: 'Class', type: 'dropdown', options: ['9th Arts', '10th Arts', '9th Science', '10th Science'] },
        { name: 'institution', label: 'Institution' },
        { name: 'field', label: 'Field', type: 'radio', options: ['Science', 'Arts'] },
      ],
      [
        { name: 'guardianName', label: 'Guardian Name' },
        { name: 'relationship', label: 'Relationship with Candidate' },
        { name: 'guardianPhoneNumber', label: 'Guardian Phone Number' },
      ],
      [
        { name: 'images', label: 'Upload Student Photo', type: 'file' },
      ],
    ];

    return (
      <Formik
        initialValues={formData[step]}
        validationSchema={validationSchemas[step]}
        onSubmit={(values) => {
          if (step === steps.length - 1) {
            handleSubmit();
          } else {
            handleNext(values);
          }
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>
              {fields[step].map((field) => (
                <Grid item xs={12} sm={field.type === 'radio' || field.type === 'dropdown' ? 12 : 6} key={field.name}>
                  {field.type === 'radio' ? (
                    <FormControl>
                      <Typography>{field.label}</Typography>
                      <RadioGroup row name={field.name}>
                        {field.options.map((option) => (
                          <FormControlLabel
                            key={option}
                            value={option}
                            control={<Field as={Radio} name={field.name} />}
                            label={option}
                          />
                        ))}
                      </RadioGroup>
                      <ErrorMessage name={field.name}>
                        {(msg) => <Typography color="error">{msg}</Typography>}
                      </ErrorMessage>
                    </FormControl>
                  ) : field.type === 'file' ? (
                    <>
                      <Typography>{field.label}</Typography>
                      <input
                        type="file"
                        onChange={(e) => setFieldValue(field.name, e.currentTarget.files[0])}
                      />
                      {errors[field.name] && touched[field.name] && (
                        <Typography color="error">{errors[field.name]}</Typography>
                      )}
                    </>
                  ) : field.type === 'dropdown' ? (
                    <FormControl fullWidth>
                      <Typography>{field.label}</Typography>
                      <Field
                        as={Select}
                        name={field.name}
                        displayEmpty
                        error={touched[field.name] && !!errors[field.name]}
                      >
                        <MenuItem value="" disabled>
                          Select {field.label}
                        </MenuItem>
                        {field.options.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Field>
                      <ErrorMessage name={field.name}>
                        {(msg) => <Typography color="error">{msg}</Typography>}
                      </ErrorMessage>
                    </FormControl>
                  ) : (
                    <Field
                      as={TextField}
                      name={field.name}
                      label={field.label}
                      fullWidth
                      error={touched[field.name] && !!errors[field.name]}
                      helperText={touched[field.name] && errors[field.name]}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
            <Box mt={2} display="flex" justifyContent="space-between">
              {step > 0 && (
                <Button variant="contained" onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button variant="contained" type="submit">
                {step === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <Box p={4}>
      <Typography variant="h4" align="center" gutterBottom>
        Pre-board Registration Form
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={4}>{renderStepContent(activeStep)}</Box>
    </Box>
  );
};

export default Pre_board;
