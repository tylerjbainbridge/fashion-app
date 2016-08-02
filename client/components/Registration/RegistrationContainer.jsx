import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { registrationValidation } from './RegistrationValidation';
import { attemptRegistration, checkUniqueUsername } from './RegistrationActions';

import Registration from './RegistrationComponent';

export const fields = [ 'username', 'password', 'firstName', 'lastName', 'confirmPassword', 'email'];

const mapStateToProps = (state) => {
    return {
      errors: state.get('registrationForm').get('errors')
    }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (form) => {
//       dispatch(attemptLogin);
//     }
//   }
// }

const register = (form, dispatch) => {
  dispatch(
    attemptRegistration(form)
  );
}

const checkUsername = (form, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(
      checkUniqueUsername(form.username)
    ).then(resolve).catch(reject);
  });
}

export default reduxForm({
  form: 'Register',
  fields,
  register,
  mapStateToProps,
  asyncValidate: checkUsername,
  asyncBlurFields: [ 'username' ],
  validate: registrationValidation
})(Registration);
