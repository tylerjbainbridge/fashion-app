import request from 'superagent';

export const getUserProfile = (username) => {
  return function (dispatch) {
    request
      .get(`/user/${username}`)
      .set('Content-Type', 'application/json')
      .then(res => {
        console.log(res.body);
        if(res.body){
          dispatch(setProfile(res.body));
        }else{
          dispatch(cantFindProfileWith(username));
        }
      });

  }
}

export const setProfile = user => {
  return {
    type: 'SET_PROFILE',
    user
  }
}

export const cantFindProfileWith = username => {
  return {
    type: '404',
    message: `There are no accounts with the username, ${username}`
  }
}
