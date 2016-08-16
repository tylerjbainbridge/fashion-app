import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import UploadProPicComponent from './UploadProPicComponent';
import { updateImage, updateCrop, attemptUploadProPic } from '../Images/ImageActions';

export const fields = ['propic'];

function mapStateToProps(state) {
  return {
    image: state.image.get('image'),
    crop: state.image.get('crop'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    imageChanged: (image) => dispatch(updateImage(image)),
    cropChanged: (crop) => dispatch(updateCrop(crop)),
  };
}

const upload = (crop, form, dispatch) => {
  const newForm = Object.assign({}, form, {
    propic: form.propic[0],
    crop,
  });    // form.crop = crop;
  return dispatch(
    attemptUploadProPic(newForm)
  );
};

const form = reduxForm({
  form: 'ProfilePicture',
  fields,
  upload,
})(UploadProPicComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(form);
