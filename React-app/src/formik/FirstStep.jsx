
import { TextField } from '@mui/material';
import { Field } from 'formik';

const FirstStep = () => (
  <>
    <Field
      name="firstName"
      as={TextField}
      label="First Name"
      variant="outlined"
      fullWidth
      margin="normal"
    />
    <Field
      name="lastName"
      as={TextField}
      label="Last Name"
      variant="outlined"
      fullWidth
      margin="normal"
    />
  </>
);

export default FirstStep;
