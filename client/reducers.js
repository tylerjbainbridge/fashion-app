import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import loginForm from './components/Login/LoginReducer';
import user from './components/User/UserReducer';
import propic from './components/ProPic/ProPicReducer';
import profile from './components/Profile/ProfileReducer';
import image from './components/Images/ImageReducer';


export default combineReducers({
  loginForm,
  user,
  image,
  propic,
  profile,
  routing: routerReducer,
  form: formReducer,
});
