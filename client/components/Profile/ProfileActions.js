import request from 'superagent';

export const getUserProfile = (username) => {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      request
        .get(`/user/${username}`)
        .set('Content-Type', 'application/json')
        .then(res => {
          if(res.body){
            dispatch(setProfile(res.body));
            resolve();
          }else{
            dispatch(cantFindProfileWith(username));
            reject();
          }
        });
      })
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
