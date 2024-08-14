
import { TextField } from '@mui/material';
import { Field } from 'formik';

const SecondStep = () => (
  <>
    <Field
      name="email"
      as={TextField}
      label="Email"
      variant="outlined"
      fullWidth
      margin="normal"
    />
  </>
);

export default SecondStep;
