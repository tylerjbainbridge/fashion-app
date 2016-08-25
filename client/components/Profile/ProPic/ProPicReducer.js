import { Map } from 'immutable';

const initialProPic = new Map({
  status: 'LOADING',
  modal: 'CLOSED',
});

function profile(state = initialProPic, action) {
  switch (action.type) {
    case 'LOADED':
      return state.update('status', () => 'LOADED');
    case 'LOADING':
      return state.update('status', () => 'LOADING');
    case 'ERROR':
      return state.update('status', () => 'ERROR');
    case 'OPEN_UPLOAD_PROPIC_MODAL':
      return state.update('modal', () => 'OPEN');
    case 'CLOSE_UPLOAD_PROPIC_MODAL':
      return state.update('modal', () => 'CLOSED');
    case 'CLEAR':
      return initialProPic;
    default:
      return state;
  }
}

export default profile;
