import { TextField } from '@mui/material';
import { Field, ErrorMessage, useFormikContext } from 'formik';


const FirstStep = () => {
  const { submitCount } = useFormikContext();

  return (
    <>
      <Field
        name="firstName"
        as={TextField}
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"

        
      />
      <ErrorMessage name="firstName">
        {msg => 
          submitCount > 0 && <div style={{ color: 'red', marginTop: '0.25rem' }}>{msg}</div>
        }
      </ErrorMessage>

      <Field
        name="lastName"
        as={TextField}
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <ErrorMessage name="lastName">
        {msg => 
          submitCount > 0 && <div style={{ color: 'red', marginTop: '0.25rem' }}>{msg}</div>
        }
      </ErrorMessage>
    </>
  );
};

export default FirstStep;
