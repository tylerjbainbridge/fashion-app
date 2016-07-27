import { List, Map, fromJS } from 'immutable';

const initialLogin = new Map({
  errors: null,
});

export const loginForm = (state = initialLogin, action) => {
  switch(action.type) {
    case 'ERROR_LOGIN':
      return state.set('errors', action.message);
    default:
      return state;
  }
}
