
import { TextField } from '@mui/material';
import { Field ,ErrorMessage} from 'formik';

const ThirdStep = () => (
  <>
    <Field
      name="phoneNumber"
      as={TextField}
      label="Phone Number"
      variant="outlined"
      fullWidth
      margin="normal"
    />

<ErrorMessage name="firstName">
      {msg => <div style={{ color: 'red', marginTop: '0.25rem' }}>{msg}</div>}
    </ErrorMessage>
  </>
);

export default ThirdStep;
