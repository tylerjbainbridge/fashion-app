import request from 'superagent';
import { push } from 'react-router-redux';

export function loginUser({ username, _id }) {
  return {
    type: 'LOG_IN',
    user: {
      username,
      userid: _id,
    },
  };
}

export function getLoggedUser() {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      request.get('/user/getUser')
        .set('Content-Type', 'application/json')
        .then(res => {
          if (res.body) {
            dispatch(loginUser(res.body));
            resolve();
          } else {
            reject();
          }
        });
    });
}


export function logoutUserState() {
  return {
    type: 'LOG_OUT',
  };
}


export function logoutError(err) {
  return {
    type: 'ERROR',
    err,
  };
}

export function logoutUser() {
  return (dispatch) => {
    request.get('/user/logout')
      .set('Content-Type', 'application/json')
      .then(() => {
        dispatch(logoutUserState());
        dispatch(push('/'));
      })
      .catch((err) => {
        dispatch(logoutError(err));
      });
  };
}

export function clickLoginState(redirect) {
  return {
    type: 'CLICK_LOGIN',
    redirect,
  };
}

export function clickLogin(redirect) {
  return (dispatch) => {
    dispatch(clickLoginState(redirect));
    dispatch(push('/login'));
  };
}

// export function getUserProfile(username) {
//   return (dispatch) => {
//     request.get(`/user/${username}`)
//       .set('Content-Type', 'application/json')
//       .then(res => {
//         if (res.body) {
//           dispatch(setProfile(res.body));
//         } else {
//           dispatch(cantFindProfileWith(username));
//         }
//       });
//   }
// }
