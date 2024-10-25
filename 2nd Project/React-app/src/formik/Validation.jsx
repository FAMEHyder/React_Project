// src/components/ValidationStep.js
import { validationSchema } from './schema';

export const getValidationSchema = (step) => {
  return validationSchema[step];
};
