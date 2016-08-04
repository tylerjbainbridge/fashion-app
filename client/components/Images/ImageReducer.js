import { Map, fromJS } from 'immutable';

const initialImageState = new Map({
  image: null,
  crop: {
    width: 100,
    aspect: 1/1,
  }
});

export const image = (state = initialImageState, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGE':
      return state.update('image', () => action.image);
    case 'UPDATE_CROP':
      return state.update('crop', () => action.crop);
    default:
      return state;
  }
};

// export default user;
