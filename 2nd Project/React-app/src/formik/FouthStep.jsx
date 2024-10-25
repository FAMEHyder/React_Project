
import { TextField } from '@mui/material';
import { Field ,ErrorMessage} from 'formik';

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

<ErrorMessage name="firstName">
      {msg => <div style={{ color: 'red', marginTop: '0.25rem' }}>{msg}</div>}
    </ErrorMessage>
  </>
);

export default FourthStep;
