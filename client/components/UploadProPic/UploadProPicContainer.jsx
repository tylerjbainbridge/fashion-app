import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import FormData from 'form-data';
import UploadProPicComponent from './UploadProPicComponent';
import { updateImage, attemptUploadProPic } from '../Images/ImageActions';

export const fields = ['propic'];

function mapStateToProps(state) {
  return {
    image: state.image.get('image'),
    serverError: state.image.get('error'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    imageChanged: (image) => dispatch(updateImage(image)),
  };
}

function upload(form, dispatch) {
  const formData = new FormData();
  formData.append('propic', form.propic[0]);
  dispatch(attemptUploadProPic(formData));
}

const form = reduxForm({
  form: 'ProfilePicture',
  fields,
  upload,
})(UploadProPicComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(form);
