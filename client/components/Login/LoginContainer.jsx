import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
import { loginValidation } from './LoginValidation';
import { attemptLogin } from './LoginActions';
import Login from './LoginComponent';

export const fields = ['username', 'password'];

function mapStateToProps(state) {
  return {
    redirect: state.user.get('redirect'),
  };
}

function login(redirect, form, dispatch) {
  return new Promise((resolve, reject) => {
    const newForm = Object.assign({}, form, {
      username: form.username.toLowerCase(),
    });
    // form.username = form.username.toLowerCase();
    dispatch(
      attemptLogin(newForm, redirect)
    ).then(resolve).catch(reject);
  });
}

const form = reduxForm({
  form: 'Login',
  fields,
  login,
  validate: loginValidation,
})(Login);

export default connect(
  mapStateToProps
)(form);
