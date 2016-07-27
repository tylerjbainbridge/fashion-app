import { List, Map, fromJS } from 'immutable';

const initialUserState = new Map({
  username: null,
  email: null,
  firstName: null,
  lastName: null,
  userid: null,
  error: null
});

export const profile = (state = initialUserState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return fromJS(action.user);
    case "404":
      return state.set('error', action.message);
    default:
      return state
  }
}
