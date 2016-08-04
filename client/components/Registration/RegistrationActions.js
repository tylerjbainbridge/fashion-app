import request from 'superagent';
import { push } from 'react-router-redux';

export function successfulRegistration() {
  return {
    type: 'SUCCESSFUL_REGISTRATION',
  };
}

export function errorRegistration(message) {
  return {
    type: 'ERROR_REGISTRATION',
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

export function attemptRegistration(form) {
  return (dispatch) =>
    request.post('/user/createAccount')
      .set('Content-Type', 'application/json')
      .send(form)
      .then(res => {
        //  TODO: turn into action.
        //  console.log('successful registration ', res.body.username);
        dispatch(loginUser(res.body));
        dispatch(push(`/updateProfilePicture`));
      })
      .catch(res => {
        dispatch(errorRegistration(res.err));
        //  TODO: turn into action.
        //  console.log(`ERR: ${res.err}`);
      });
}

export function checkUniqueUsername(username) {
  return () =>
    new Promise((resolve, reject) => {
      request.post('/user/checkUsername')
        .set('Content-Type', 'application/json')
        .send({ username })
        .then(res => {
          if (res.body.username) {
            reject({ username: 'That username is already in use.' });
          } else {
            resolve();
          }
        })
        .catch(() => {
          reject();
          //  TODO: turn into action.
          //  console.log('err: ', res.err);
        });
    });
}
