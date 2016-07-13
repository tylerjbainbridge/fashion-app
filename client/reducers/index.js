import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { List, Map, fromJS } from 'immutable';


const initialRegistration = new Map({
  username: null,
  username_color: 'black',
  password: null,
  state: ''
});

function registrationForm(state = initialRegistration, action) {
  switch(action.type) {

    case 'SUBMIT_REGISTRATION_FORM':
      return state.set('state', 'SUBMITTING');
    case 'END_REGISTRATION_SUBMIT':
      return state.set('state', '');

    case 'SUCCESSFUL_REGISTRATION':
      return state.set('state', 'SUCCESS');

    case 'SUCCESS_USERNAME':
      return state.merge({
        'username': null,
        'state': 'SUCCESS_USERNAME',
        'username_color': 'green'
      });

    case 'ERROR_USERNAME':
      return state.merge({
        'username': action.message,
        'state': 'ERROR_USERNAME',
        'username_color': 'red'
      });

    case 'SUCCESS_PASSWORD':
      return state.set('password', 'SUCCESS');

    case 'CLEAR_REGISTRATION_FORM':
      return initialRegistration;

    default:
      return state;
  }
}

const initialLogin = new Map({
  state: '',
  errors: '',
  username_color: 'black'
});

function loginForm(state = initialLogin, action) {
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


function user(state = new Map({}) , action) {
  switch (action.type) {
    case "LOG_IN":
      return fromJS(action.user);
    default:
      return state
  }
}

export default combineReducers({
    loginForm,
    registrationForm,
    user,
    routing: routerReducer
});
