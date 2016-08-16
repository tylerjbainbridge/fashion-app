import request from 'superagent';
import FormData from 'form-data';

// import { push } from 'react-router-redux';

export function updateImage(image) {
  return {
    type: 'UPDATE_IMAGE',
    image,
  };
}

export function updateCrop(crop) {
  return {
    type: 'UPDATE_CROP',
    crop,
  };
}

export function deleteImage() {
  return {
    type: 'DELETE_IMAGE',
  };
}

export function resetCrop() {
  return {
    type: 'RESET_CROP',
  };
}

export function resetForm() {
  return (dispatch) => {
    dispatch(deleteImage());
    dispatch(resetCrop());
  };
}

//  TODO: add disptch here.
export function attemptUploadProPic(form) {
  const formData = new FormData();
  formData.append('crop', JSON.stringify(form.crop));
  formData.append('propic', form.propic);
  return (dispatch) =>
    new Promise((resolve, reject) => {
      request.post('/user/update/propic')
        .send(formData)
        .then(res => {
          console.log(res);
          resetForm();
        });
    });
}
