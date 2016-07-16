import { List, Map, fromJS } from 'immutable';

const initialLogin = new Map({
  state: '',
  errors: '',
  username_color: 'black'
});

export const loginForm = (state = initialLogin, action) => {
  switch(action.type) {
    case 'SUBMITTING_LOGIN_FORM':
      return state.set('state', 'SUBMITTING');
    case 'END_LOGIN_SUBMIT':
      return state.set('state', '');
    case 'SUCCESSFUL_LOGIN':
      return state.set('state', 'SUCCESS');
    case 'ERROR_LOGIN':
      if(action.message == 'INCORRECT_CREDENTIALS'){
        return state.set('errors', 'Invalid credentials, try again.');
      }else{
        return state.set('errors', action.message);
      }
    case 'CLEAR_LOGIN_FORM':
      return initialLogin;
    default:
      return state;
  }
}
