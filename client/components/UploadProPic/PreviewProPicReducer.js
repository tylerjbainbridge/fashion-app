import { Map } from 'immutable';

const initialPreviewProPic = new Map({
  modal: 'CLOSED',
});

const previewModal = (state = initialPreviewProPic, action) => {
  switch (action.type) {
    case 'CLOSE_PREVIEW_MODAL':
      return state.update('modal', () => 'CLOSED');
    case 'OPEN_PREVIEW_MODAL':
      return state.update('modal', () => 'OPEN');
    default:
      return state;
  }
};

export default previewModal;
