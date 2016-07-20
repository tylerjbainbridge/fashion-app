import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { List, Map, fromJS } from 'immutable';
import {reducer as formReducer} from 'redux-form';

// import { user } from './user';
import { loginForm } from './Login/LoginReducer';
import { registrationForm } from './Registration/RegistrationReducer';
import { user } from './User/UserReducer';


export default combineReducers({
    loginForm,
    registrationForm,
    user,
    routing: routerReducer,
    form: formReducer
});
