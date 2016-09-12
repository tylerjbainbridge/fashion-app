import request from 'superagent';
import { push } from 'react-router-redux';

export function successfulLogin() {
  return {
    type: 'SUCCESSFUL_LOGIN',
  };
}

export function errorLogin(message) {
  return {
    type: 'ERROR_LOGIN',
    message,
  };
}

export function loginUser({ username, _id }) {
  return {
    type: 'LOG_IN',
    user: {
      username,
      userid: _id,
    },
  };
}

export function attemptLogin(form, redirect) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      request.post('/user/login')
        .set('Content-Type', 'application/json')
        .send(form)
        .then(res => {
          dispatch(loginUser(res.body.user));

          if (redirect) {
            dispatch(push(redirect));
          } else {
            dispatch(push(`/u/${res.body.user.username}`));
          }

          resolve();
        })
        .catch(() => {
          //  TODO: make an action for this.
          //  console.log(`ERR: ${res.body}`);
          reject({
            username: 'Incorrect Credentials',
            password: 'Incorrect Credentials',
          });
        });
    });
}
