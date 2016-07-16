import request from 'superagent';
import { push } from 'react-router-redux';

import * as loginForm from './loginForm.js';
import * as registrationForm from './registrationForm.js';
import { loginUser } from './common/forms.js';

export const loginFormActions = loginForm;
export const registrationFormActions = registrationForm;

export const getLoggedUser = () => {
  return function ( dispatch ) {
    return request.get('/getUser')
      .set('Content-Type', 'application/json')
      .then(res => {
        console.log(res.body);
        dispatch(loginUser(res.body));
      })
  };
}

///async practice
///see other project
