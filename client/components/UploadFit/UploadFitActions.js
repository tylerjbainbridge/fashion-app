// import request from 'superagent';

export function addFormField(field) {
  return {
    type: 'ADD_FORM_FIELD',
    field,
  };
}

export function removeFormField(index) {
  return {
    type: 'REMOVE_FORM_FIELD',
    index,
  };
}

export function updateImage(image) {
  return {
    type: 'UPDATE_FIT_IMAGE',
    image,
  };
}

export function updateCrop(crop) {
  return {
    type: 'UPDATE_FIT_CROP',
    crop,
  };
}

export function deleteImage() {
  return {
    type: 'DELETE_FIT_IMAGE',
  };
}

export function uploadError(error) {
  return {
    type: 'UPLOAD_FIT_ERROR',
    error,
  };
}

export function resetUploadPage() {
  return {
    type: 'RESET_UPLOAD_FIT',
  };
}

// export function attemptUploadProPic(form, crop) {
//   return (dispatch) =>
//     new Promise((resolve, reject) => {
//       request.post('/user/update/propic')
//         .send(form, crop)
//         .then(res => {
//           if (!res.body.err) {
//             dispatch(goToLoggedUsersProfile());
//             resetForm();
//           } else {
//             dispatch(uploadError(res.body.err));
//           }
//         })
//         .catch((err) => {
//           dispatch(uploadError(err));
//         });
//     });
// }
