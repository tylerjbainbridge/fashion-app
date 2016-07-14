import request from 'superagent';
import { validateRegistration } from './validators/registration';

import {
  regFieldSuccess,
  regFieldError,
  setSubmittingForm,
  loginUser,
  clearFormState,
  endSubmit
} from './common/forms';

export const submitRegistrationForm = ({ username, password }) => {
  return {
    type: 'SUBMIT_REGISTRATION_FORM',
    username,
    password
  }
};

export const attemptRegistration = (form) => {
  return function ( dispatch ) {
    dispatch(setSubmittingForm('REGISTRATION'));
    return request.post('/createAccount')
      .set('Content-Type', 'application/json')
      .send(form)
      .then(res => {
        dispatch(successfulRegistrationSubmit());
        dispatch(loginUser(res.body));
        dipatch(endSubmit('REGISTRATION'));
        dispatch(push('/user'));
      })
      .catch(res => {
        console.log(`ERR: ${res.body}`);
      });
  };
};

export const registrationFormChange = (type, value) => {
  return function ( dispatch ) {
    let error = validateRegistration(type, value);
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

export const successfulRegistrationSubmit = ({ username, userid, fullname }) => {
  return {
    type: "SUCCESSFUL_REGISTRATION",
    username,
    userid,
    fullname
  }
};
