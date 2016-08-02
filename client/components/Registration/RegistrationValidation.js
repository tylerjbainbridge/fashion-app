import { isAlphanumeric, isAlpha, isLength, isEmail } from 'validator';

const registrationValidation = (form) => {
  const { username, firstName, lastName, password, confirmPassword, email } = form;
  const errors = {};

  if (!username) {
    errors.username = 'Required';
  } else if (!isLength(username, { min: 0, max: 20 })) {
    errors.username = 'Username must be 0-20';
  } else if (!isAlphanumeric(username)) {
    errors.username = 'Username must be alpha numeric.';
  }

  if (!email) {
    errors.email = 'Required';
  } else if (!isEmail(email)) {
    errors.email = 'Invalid email.';
  }

  if (!firstName) {
    errors.firstName = 'Required';
  } else if (!isAlpha(firstName)) {
    errors.firstName = 'Numbers arent allowed here.';
  }

  if (!lastName) {
    errors.lastName = 'Required';
  } else if (!isAlpha(lastName)) {
    errors.lastName = 'Numbers arent allowed here.';
  }

  if (!password) {
    errors.password = 'Required';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Required';
  }

  if (password && confirmPassword) {
    if (password !== confirmPassword) {
      errors.password = 'Passwords do not match.';
      errors.confirmPassword = 'Passwords do not match.';
    }
  }

  return errors;
};

export default registrationValidation;
