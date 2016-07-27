import { List, Map, fromJS } from 'immutable';

const initialUserState = new Map({
  username: null,
  userid: null
});

export const user = (state = initialUserState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return fromJS(action.user);
    case "LOG_OUT":
      return initialUserState;
    default:
      return state
  }
}
