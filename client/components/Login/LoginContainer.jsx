import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { loginValidation } from './LoginValidation';
import { attemptLogin } from './LoginActions';

require('./LoginStyles/style.scss');
import Login from './LoginComponent';

export const fields = [ 'username', 'password'];

const login = (form, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(
      attemptLogin(form)
    ).then(resolve).catch(reject);
  })
}

const checkUsername = (form, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(
      checkUniqueUsername(form.username)
    ).then(resolve).catch(reject);
  });
}

export default reduxForm({
  form: 'Login',
  fields,
  login,
  validate: loginValidation
})(Login);
