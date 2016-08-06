import request from 'superagent';
// import { push } from 'react-router-redux';

export function setProfile(user) {
  return {
    type: 'SET_PROFILE',
    user,
  };
}

export function foundProfile() {
  return {
    type: 'FOUND',
  };
}

export function cantFindProfileWith(username) {
  return {
    type: '404',
    message: `There are no accounts with the username, ${username}`,
  };
}

export function getUserProfile(username) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      request
        .get(`/user/by/${username}`)
        .set('Content-Type', 'application/json')
        .then(res => {
          if (res.body) {
            dispatch(setProfile(res.body));
            dispatch(foundProfile());
            resolve();
          } else {
            dispatch(setProfile({
              username: null,
              email: null,
              firstName: null,
              lastName: null,
              userid: null,
            }));
            dispatch(cantFindProfileWith(username));
            // dispatch(push('/404'));
            resolve();
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
}
