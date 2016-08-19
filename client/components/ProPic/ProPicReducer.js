import { Map } from 'immutable';

const initialUserState = new Map({
  status: 'LOADING',
});

function profile(state = initialUserState, action) {
  switch (action.type) {
    case 'LOADED':
      return state.update('status', () => 'LOADED');
    case 'LOADING':
      return state.update('status', () => 'LOADING');
    case 'ERROR':
      return state.update('status', () => 'ERROR');
    default:
      return state;
  }
}

export default profile;
