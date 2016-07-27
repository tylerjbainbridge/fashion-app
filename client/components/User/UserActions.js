import request from 'superagent';
import { push } from 'react-router-redux';

export const getLoggedUser = () => {
  return function ( dispatch ) {
    request.get('/getUser')
      .set('Content-Type', 'application/json')
      .then(res => {
        if(res.body){
          dispatch(loginUser(res.body));
        }
      });
  };
};

export const getUserProfile = (username) => {
  return function (dispatch) {
    request.get(`/user/${username}`)
      .set('Content-Type', 'application/json')
      .then(res => {
        if(res.body){
          dispatch(setProfile(res.body));
        }else{
          dispatch(cantFindProfileWith(username));
        }
      });

  }
}

export const logoutUser = () => {
  return function (dispatch) {
    console.log('hello');
    request.get(`/logout`)
      .set('Content-Type', 'application/json')
      .then(res => {
        dispatch(logoutUserState());
        dispatch(push('/'));
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export const logoutUserState = () => {
  return {
    type: 'LOG_OUT'
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
