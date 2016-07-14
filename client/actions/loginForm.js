import request from 'superagent';

import {
  regFieldSuccess,
  regFieldError,
  setSubmittingForm,
  loginUser,
  clearFormState,
  endSubmit
} from './common/forms';

export const attemptLogin = (form) => {
  return function ( dispatch ) {
    dispatch(setSubmittingForm('LOGIN'));
    return request.post('/login')
      .set('Content-Type', 'application/json')
      .send(form)
      .then(res => {
        if(!res.body.err){
          dispatch(successfulLoginSubmit());
          dispatch(loginUser(res.body));
          dispatch(endSubmit('LOGIN'));
          dispatch(push('/user'));
        }else{
          dispatch(endSubmit('LOGIN'));
          dispatch(errorLoginSubmit(res.body.err))
        }
      })
      .catch(res => {
        console.log(`ERR: ${res.body}`);
      });
  };
};

export const submitLoginForm = () => {
  return {
    type: 'SUBMITTING_LOGIN_FORM'
  }
}

export const successfulLoginSubmit = () => {
    return {
      type: 'SUCCESSFUL_LOGIN'
    }
}

export const errorLoginSubmit = ( message ) => {
    return {
      type: 'ERROR_LOGIN',
      message
    }
}
