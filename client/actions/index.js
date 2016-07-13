import request from 'superagent';
import { push } from 'react-router-redux';
// import { validateRegistraionFormOnChange } from

const validateRegistraionFormOnChange = (type, value) => {
  switch (type) {
    case 'USERNAME':
      if(value == '')
        return 'Username required.'
      else
        return false;
    default:
      return false;
  }
}

export const submitRegistrationForm = ({ username, password }) => {
  return {
    type: 'SUBMIT_REGISTRATION_FORM',
    username,
    password
  }
};

export const setSubmittingRegistrationForm = () => {
  return {
    type: 'SUBMIT_REGISTRATION_FORM'
  }
}

export const regFieldSuccess = (type) => {
  return {
    type: `SUCCESS_${type}`
  }
}

export const regFieldError = (type, message) => {
  return {
    type: `ERROR_${type}`,
    message
  }
}

export const registrationFormChange = (type, value) => {
  return function ( dispatch ) {
    let error = validateRegistraionFormOnChange(type, value);
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

export const loginUser = ({ username, _id }) => {
  return {
    type: "LOG_IN",
    user: {
      username,
      userid: _id
    }
  }
};

export const submitLoginForm = () => {
  return {
    type: 'SUBMITTING_LOGIN_FORM'
  }
}

export const clearFormState = (type) => {
  return {
    type: `CLEAR_${type}_FORM`
  }
}

export const endSubmit = (type) => {
  return {
    type: `END_${type}_SUBMIT`
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

export const routeAfterLogin = () => {
  return {
    type: "ROUTE_AFTER_LOGIN",
    url: 'login'
  }
}

export const attemptLogin = (form) => {
  return function ( dispatch ) {
    dispatch(submitLoginForm());
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

export const attemptRegistration = (form) => {
  return function ( dispatch ) {
    dispatch(setSubmittingRegistrationForm());
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
