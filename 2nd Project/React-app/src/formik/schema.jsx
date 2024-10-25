import * as Yup from 'yup';

export const validationSchema = [
  Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'First Name can only contain letters')
      .required('First Name is required'),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Last Name can only contain letters')
      .required('Last Name is required'),
  }),
  Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  }),
  Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{11}$/, 'Phone Number must be exactly 10 digits')
      .required('Phone Number is required'),
  }),
  Yup.object({
    address: Yup.string()
      .matches(/^[A-Za-z0-9\s,.-]+$/, 'Address can contain letters, numbers, spaces, commas, periods, and hyphens')
      .required('Address is required'),
  }),
];
