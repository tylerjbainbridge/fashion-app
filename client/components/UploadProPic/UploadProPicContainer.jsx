import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import UploadProPicComponent from './UploadProPicComponent';
import { updateImage, updateCrop, attemptUploadProPic } from '../Images/ImageActions';
export const fields = ['propic'];


const mapStateToProps = (state) => {
  return {
    image: state.image.get('image'),
    crop: state.image.get('crop')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    imageChanged: (image) => {
      return dispatch(updateImage(image));
    },
    cropChanged: (crop) => {
      return dispatch(updateCrop(crop));
    }
  }
};

const upload = (crop, form, dispatch) => {
  new Promise((resolve, reject) => {
    form.crop = crop;
    dispatch(
      attemptUploadProPic(form)
    );
  });
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

// const StepTwoContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(StepTwo);

// export default StepTwoContainer;
