import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { List, Map, fromJS } from 'immutable';

import { user } from './user';
import { loginForm } from './loginForm';
import { registrationForm } from './registrationForm';

export default combineReducers({
    loginForm,
    registrationForm,
    user,
    routing: routerReducer
});
