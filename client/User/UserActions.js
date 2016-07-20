import request from 'superagent';

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

export const loginUser = ({ username, _id }) => {
  return {
    type: "LOG_IN",
    user: {
      username,
      userid: _id
    }
  }
};
