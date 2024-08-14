
import { TextField } from '@mui/material';
import { Field , ErrorMessage} from 'formik';

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

<ErrorMessage name="firstName">
      {msg => <div style={{ color: 'red', marginTop: '0.25rem' }}>{msg}</div>}
    </ErrorMessage>

  </>
);

export default SecondStep;
