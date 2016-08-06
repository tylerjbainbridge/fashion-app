import { Map, fromJS } from 'immutable';

const initialUserState = new Map({
  username: null,
  userid: null,
  redirect: null,
});

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return fromJS(action.user);
    case 'LOG_OUT':
      return initialUserState;
    case 'CLICK_LOGIN':
      return state.update('redirect', () => action.redirect);
    default:
      return state;
  }
};

export default user;
