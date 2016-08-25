import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import FormData from 'form-data';
import UploadProPicComponent from './UploadProPicComponent';
import { closeModal } from '../Profile/ProPic/ProPicActions';
import { openPreviewModal, closePreviewModal } from './PreviewProPicActions';
import {
  updateImage,
  attemptUploadProPic,
  resetUploadPage,
  deleteImage,
} from './UploadProPicActions';

export const fields = ['propic'];

function mapStateToProps(state) {
  return {
    image: state.uploadProPic.get('image'),
    serverError: state.uploadProPic.get('error'),
    username: state.user.get('username'),
    modal: state.previewProPic.get('modal'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    imageChanged: (image) => dispatch(updateImage(image)),
    resetUploadPage: () => dispatch(resetUploadPage()),
    deleteImage: () => dispatch(deleteImage()),
    closeModal: () => dispatch(closeModal()),
    openPreviewModal: () => dispatch(openPreviewModal()),
    closePreviewModal: () => dispatch(closePreviewModal()),
  };
}

function upload(image, form, dispatch) {
  const formData = new FormData();
  formData.append('propic', image[0]);
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
