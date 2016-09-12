// import { isAlphanumeric, isAlpha, isLength, isEmail } from 'validator';

const loginValidation = (form) => {
  const errors = {};

  if (!form.username) {
    errors.username = 'Required';
  }

  if (!form.password) {
    errors.password = 'Required';
  }

  return errors;
};

export default loginValidation;
