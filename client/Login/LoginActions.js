import request from 'superagent';
import { push } from 'react-router-redux';

export const attemptLogin = (form) => {
  return function ( dispatch ) {
    return new Promise((resolve, reject) => {
      request.post('/login')
        .set('Content-Type', 'application/json')
        .send(form)
        .then(res => {
          dispatch(loginUser(res.body.user));
          dispatch(push('/user'));
          resolve();
        })
        .catch(res => {
          console.log(`ERR: ${res.body}`);
          reject({
            username: 'Incorrect Credentials',
            password: 'Incorrect Credentials'
          })
        });
    });
  };
};

export const successfulLogin = () => {
    return {
      type: 'SUCCESSFUL_LOGIN'
    }
}

export const errorLogin = ( message ) => {
    return {
      type: 'ERROR_LOGIN',
      message
    }
}

export const loginUser = ({ username, _id }) => {
  return {
    type: "LOG_IN",
    user: {
      username,
      userid: _id
    }
  }
};
