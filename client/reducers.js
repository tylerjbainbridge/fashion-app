import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { List, Map, fromJS } from 'immutable';
import {reducer as formReducer} from 'redux-form';

// import { user } from './user';
import { loginForm } from './components/Login/LoginReducer';
import { registrationForm } from './components/Registration/RegistrationReducer';
import { user } from './components/User/UserReducer';
import { profile } from './components/Profile/ProfileReducer';



export default combineReducers({
    loginForm,
    registrationForm,
    user,
    profile,
    routing: routerReducer,
    form: formReducer
});
