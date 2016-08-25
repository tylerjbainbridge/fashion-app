import { Map } from 'immutable';

const initialUploadProPicState = new Map({
  image: null,
  error: null,
});

const image = (state = initialUploadProPicState, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGE':
      return state.update('image', () => action.image);
    case 'DELETE_IMAGE':
      return state.update('image', () => null);
    case 'UPLOAD_ERROR':
      return state.update('error', () => action.error);
    case 'RESET_UPLOAD_PROPIC':
      return initialUploadProPicState;
    default:
      return state;
  }
};

export default image;
