import { Map, List } from 'immutable';

const initialUploadFitState = new Map({
  image: null,
  error: null,
  crop: null,
  fields: new List(),
});

const uploadFit = (state = initialUploadFitState, action) => {
  switch (action.type) {
    case 'UPDATE_FIT_IMAGE':
      return state.update('image', () => action.image);
    case 'DELETE_FIT_IMAGE':
      return state.update('image', () => null);
    case 'UPDATE_FIT_CROP':
      return state.update('crop', () => action.crop);
    case 'UPLOAD_FIT_ERROR':
      return state.update('error', () => action.error);
    case 'ADD_FORM_FIELD':
      return state.update('fields', (fields) => fields.push(action.field));
    case 'REMOVE_FORM_FIELD':
      return state.update('fields', (fields) => fields.delete(action.index));
    case 'RESET_UPLOAD_PROPIC':
      return initialUploadFitState;
    default:
      return state;
  }
};

export default uploadFit;
