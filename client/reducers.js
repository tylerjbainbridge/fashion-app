import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { loginForm } from './components/Login/LoginReducer';
import { registrationForm } from './components/Registration/RegistrationReducer';
import { user } from './components/User/UserReducer';
import { profile } from './components/Profile/ProfileReducer';
import { image } from './components/Images/ImageReducer';


export default combineReducers({
  loginForm,
  registrationForm,
  user,
  image,
  profile,
  routing: routerReducer,
  form: formReducer,
});
