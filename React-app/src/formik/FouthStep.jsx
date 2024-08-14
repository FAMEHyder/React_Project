
import { TextField } from '@mui/material';
import { Field } from 'formik';

const FourthStep = () => (
  <>
    <Field
      name="address"
      as={TextField}
      label="Address"
      variant="outlined"
      fullWidth
      margin="normal"
    />
  </>
);

export default FourthStep;
