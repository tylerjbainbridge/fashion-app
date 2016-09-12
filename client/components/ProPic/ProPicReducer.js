import { Map } from 'immutable';

const initialProPic = new Map({
  status: 'LOADING',
});

function profile(state = initialProPic, action) {
  switch (action.type) {
    case 'LOADED':
      return state.update('status', () => 'LOADED');
    case 'LOADING':
      return state.update('status', () => 'LOADING');
    case 'ERROR':
      return state.update('status', () => 'ERROR');
    case 'CLEAR':
      return initialProPic;
    default:
      return state;
  }
}

export default profile;
