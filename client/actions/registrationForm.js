import request from 'superagent';
import { validateRegistration } from './validators/registration';
import { push } from 'react-router-redux';

import {
  regFieldSuccess,
  regFieldError,
  setSubmittingForm,
  loginUser,
  clearFormState,
  endSubmit
} from './common/forms';

export const submitRegistrationForm = ({ username, password, first_name, last_name, email }) => {
  return {
    type: 'SUBMIT_REGISTRATION_FORM',
    username,
    password,
    first_name,
    last_name,
    email
  }
};

export const attemptRegistration = (form) => {
  return function ( dispatch ) {
    dispatch(setSubmittingForm('REGISTRATION'));
    return request.post('/createAccount')
      .set('Content-Type', 'application/json')
      .send(form)
      .then(res => {
        console.log(JSON.stringify(res.body));
        dispatch(successfulRegistrationSubmit());
        dispatch(loginUser(res.body));
        dispatch(endSubmit('REGISTRATION'));
        dispatch(push('/user'));
      })
      .catch(res => {
        console.log(`ERR: ${res.err}`);
      });
  };
};

export const registrationFormChange = (type, value) => {
  return function ( dispatch ) {
    let error = validateRegistration(type, value);
    console.log(error);
    if (!error){
      if(type == 'USERNAME'){
        return request.post('/checkUsername')
          .send({ username:value })
          .then(res => {
            if(res.body.username){
              dispatch(regFieldError(type, 'Username already in use.'));
            }else{
              dispatch(regFieldSuccess(type));
            }
          });

      }else{
        dispatch(regFieldSuccess(type));
      }
    }else{
      dispatch(regFieldError(type, error));
    }
  }
}

export const successfulRegistrationSubmit = () => {
  return {
    type: "SUCCESSFUL_REGISTRATION"
  }
};
