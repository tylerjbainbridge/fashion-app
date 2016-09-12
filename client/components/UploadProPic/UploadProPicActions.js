import request from 'superagent';
import { goToLoggedUsersProfile } from '../User/UserActions';
// import { push } from 'react-router-redux';

export function updateImage(image) {
  return {
    type: 'UPDATE_IMAGE',
    image,
  };
}

export function updateCrop(crop) {
  console.log(crop);
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

export function uploadError(error) {
  return {
    type: 'UPLOAD_ERROR',
    error,
  };
}

export function resetUploadPage() {
  return {
    type: 'RESET_UPLOAD_PROPIC',
  };
}

export function resetForm() {
  return (dispatch) => {
    dispatch(deleteImage());
    dispatch(resetCrop());
  };
}

//  TODO: add disptch here.
export function attemptUploadProPic(form, crop) {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      request.post('/user/update/propic')
        .send(form, crop)
        .then(res => {
          if (!res.body.err) {
            console.log(res.body);
            dispatch(goToLoggedUsersProfile());
            resetForm();
          } else {
            dispatch(uploadError(res.body.err));
          }
        })
        .catch((err) => {
          dispatch(uploadError(err));
        });
    });
}
