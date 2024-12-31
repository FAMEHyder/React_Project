import React, { useState } from 'react';
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
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const steps = [
  'Personal Information',
  'Educational Background',
  'Guardian Information',
  'Payment Information',
];

const stepSchemas = [
  Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    fatherName: Yup.string().required('Father Name is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10,15}$/, 'Invalid phone number')
      .required('Phone number is required'),
    cnic: Yup.string()
      .matches(/^[0-9]{13}$/, 'Invalid CNIC/B-Form')
      .required('CNIC/B-Form is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
  }),
  Yup.object().shape({
    class: Yup.string().required('Class is required'),
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
    paymentScreenshot: Yup.mixed().required('Screenshot is required'),
  }),
];

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
    class: '',
    institution: '',
    field: '',
  },
  {
    guardianName: '',
    relationship: '',
    guardianPhoneNumber: '',
  },
  {
    paymentScreenshot: null,
  },
];

const Pre_board = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values) => {
    console.log('Final Form Values:', values);
    alert('Form Submitted!');
  };

  const renderStepContent = (step) => {
    const formFields = [
      [
        { name: 'fullName', label: 'Full Name', type: 'text' },
        { name: 'fatherName', label: 'Father Name', type: 'text' },
        { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
        { name: 'cnic', label: 'CNIC/B-Form', type: 'text' },
        { name: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female'] },
        { name: 'address', label: 'Address', type: 'text' },
      ],
      [
        { name: 'class', label: 'Class', type: 'text' },
        { name: 'institution', label: 'Institution', type: 'text' },
        { name: 'field', label: 'Field', type: 'radio', options: ['Science', 'Art'] },
      ],
      [
        { name: 'guardianName', label: 'Name of Guardian', type: 'text' },
        { name: 'relationship', label: 'Relationship with Candidate', type: 'text' },
        { name: 'guardianPhoneNumber', label: 'Phone Number', type: 'text' },
      ],
      [
        { name: 'paymentScreenshot', label: 'Upload Payment Screenshot', type: 'file' },
      ],
    ];

    return (
      <Formik
        initialValues={initialValues[step]}
        validationSchema={stepSchemas[step]}
        onSubmit={step === steps.length - 1 ? handleSubmit : handleNext}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>
              {formFields[step].map((field) => (
                <Grid item xs={12} sm={field.type === 'radio' ? 12 : 6} key={field.name}>
                  {field.type === 'radio' ? (
                    <FormControl component="fieldset">
                      <Typography variant="body1">{field.label}</Typography>
                      <RadioGroup row name={field.name}>
                        {field.options.map((option) => (
                          <FormControlLabel
                            key={option}
                            value={option.toLowerCase()}
                            control={<Field as={Radio} />}
                            label={option}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  ) : field.type === 'file' ? (
                    <div>
                      <input
                        id={field.name}
                        name={field.name}
                        type="file"
                        accept="image/*"
                        onChange={(event) => setFieldValue(field.name, event.currentTarget.files[0])}
                      />
                      {touched[field.name] && errors[field.name] && (
                        <Typography color="error" variant="body2">
                          {errors[field.name]}
                        </Typography>
                      )}
                    </div>
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
    <Box p={2}>
      <Typography variant="h4" textAlign="center" gutterBottom>
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