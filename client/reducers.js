import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import loginForm from './components/Login/LoginReducer';
import user from './components/User/UserReducer';
import propic from './components/Profile/ProPic/ProPicReducer';
import uploadProPic from './components/UploadProPic/UploadProPicReducer';
import previewProPic from './components/UploadProPic/PreviewProPicReducer';
import profile from './components/Profile/ProfileReducer';
import image from './components/Images/ImageReducer';
import uploadFit from './components/UploadFit/UploadFitReducer';

export default combineReducers({
  loginForm,
  user,
  image,
  propic,
  uploadProPic,
  previewProPic,
  profile,
  uploadFit,
  routing: routerReducer,
  form: formReducer,
});
