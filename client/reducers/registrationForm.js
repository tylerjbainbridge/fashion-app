import { List, Map, fromJS } from 'immutable';

const initialRegistration = new Map({
  username: null,
  password: null,
  email: null,
  first_name: null,
  last_name: null,
  username_color: '',
  password_color: '',
  first_name_color: '',
  last_name_color: '',
  state: ''
});

export const registrationForm = (state = initialRegistration, action) => {
  switch(action.type) {

    case 'SUBMIT_REGISTRATION_FORM':
      return state.set('state', 'SUBMITTING');
    case 'END_REGISTRATION_SUBMIT':
      return state.set('state', '');

    case 'SUCCESSFUL_REGISTRATION':
      return state.set('state', 'SUCCESS');

    case 'SUCCESS_USERNAME':
      return success(state, 'username', action.message);
    case 'ERROR_USERNAME':
      return error(state, 'username', action.message);

    case 'SUCCESS_PASSWORD':
      return success(state, 'password');
    case 'ERROR_PASSWORD':
      return error(state, 'password', action.message);

    case 'SUCCESS_EMAIL':
      return success(state, 'email');
    case 'ERROR_EMAIL':
      return error(state, 'email', action.message);

    case 'SUCCESS_FIRST_NAME':
      return success(state, 'first_name');
    case 'ERROR_FIRST_NAME':
      return error(state, 'first_name', action.message);

    case 'SUCCESS_LAST_NAME':
      return success(state, 'last_name');
    case 'ERROR_LAST_NAME':
      return error(state, 'last_name', action.message);

    case 'CLEAR_REGISTRATION_FORM':
      return initialRegistration;

    default:
      return state;
  }
}

function success(state, type){
  let temp = {};
  temp[`${type}`] = null;
  temp[`${type}_color`] = 'green';

  return state.merge(temp);
}

function error(state, type, message){
  let temp = {};
  temp[`${type}`] = message;
  temp[`${type}_color`] = 'red';

  return state.merge(temp);
}
