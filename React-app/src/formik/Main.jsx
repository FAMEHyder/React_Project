// src/components/MainStep.js
import { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep'
import FourthStep from './FouthStep';
import { getValidationSchema } from './Validation';

const MainStep = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const steps = ['Personal Details', 'Contact Info', 'Phone Number', 'Address'];

  const handleNext = () => {
    if (step < steps.length - 1) {
      navigate(`/step${step + 2}`);
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      navigate(`/step${step}`);
      setStep(step - 1);
    }
  };

  const handleSubmit = (values, actions) => {
    if (step === steps.length - 1) {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
      setStep(0);
      navigate('/step1');
    } else {
      handleNext();
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
      }}
      validationSchema={getValidationSchema(step)}
      onSubmit={handleSubmit}
    >
      <Form>
        <Stepper activeStep={step}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {step === 0 && <FirstStep />}
          {step === 1 && <SecondStep />}
          {step === 2 && <ThirdStep />}
          {step === 3 && <FourthStep />}
          <div style={{ marginTop: '20px' }}>
            <Button
              disabled={step === 0}
              onClick={handleBack}
              variant="contained"
              color="secondary"
              style={{ marginRight: '10px' }}
            >
              Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              {step === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default MainStep;
