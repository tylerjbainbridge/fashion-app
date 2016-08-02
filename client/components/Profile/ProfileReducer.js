import { Map } from 'immutable';

// const initialUserState = new Map({
//   username: null,
//   email: null,
//   firstName: null,
//   lastName: null,
//   userid: null,
//   error: null
// });


const initialUserState = new Map({
  user: {},
  error: null,
});

export const profile = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return state.update('user', () => action.user);
    case '404':
      return state.update('error', () => action.message);
    default:
      return state;
  }
};
