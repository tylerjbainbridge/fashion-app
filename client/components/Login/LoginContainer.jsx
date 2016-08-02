import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { loginValidation } from './LoginValidation';
import { attemptLogin } from './LoginActions';

import Login from './LoginComponent';

export const fields = [ 'username', 'password'];

const mapStateToProps = state => {
  return {
    redirect: state.user.get('redirect')
  }
};

const login = (redirect, form, dispatch) => {
  return new Promise((resolve, reject) => {
    form.username = form.username.toLowerCase();
    dispatch(
      attemptLogin(form, redirect)
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

const form = reduxForm({
  form: 'Login',
  fields,
  login,
  validate: loginValidation
})(Login);

export default connect(
  mapStateToProps
)(form);
