import { isAlphanumeric, isAlpha, isLength, isEmail } from 'validator';

export const registrationValidation = (form) => {
  const errors = {}

  if(!form.username){
    errors.username = 'Required'
  }

  if(!form.password){
    errors.password = 'Required';
  }

  return errors;
};
