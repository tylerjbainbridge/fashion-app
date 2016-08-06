import { Map } from 'immutable';

const initialLogin = new Map({
  errors: null,
});

function loginForm(state = initialLogin, action) {
  switch (action.type) {
    case 'ERROR_LOGIN':
      return state.set('errors', action.message);
    default:
      return state;
  }
}

export default loginForm;
