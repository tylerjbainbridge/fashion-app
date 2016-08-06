import { Map } from 'immutable';

const initialImageState = new Map({
  image: null,
  crop: {
    width: 100,
    aspect: 1,
  },
});

const image = (state = initialImageState, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGE':
      return state.update('image', () => action.image);
    case 'UPDATE_CROP':
      return state.update('crop', () => action.crop);
    case 'DELETE_IMAGE':
      return state.update('image', () => null);
    case 'RESET_CROP':
      return state.update('crop', () => null);
    default:
      return state;
  }
};

export default image;
