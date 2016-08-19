import { Map } from 'immutable';

const initialImageState = new Map({
  image: null,
  error: null,
});

const image = (state = initialImageState, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGE':
      return state.update('image', () => action.image);
    case 'DELETE_IMAGE':
      return state.update('image', () => null);
    case 'UPLOAD_ERROR':
      return state.update('error', () => action.error);
    default:
      return state;
  }
};

export default image;
