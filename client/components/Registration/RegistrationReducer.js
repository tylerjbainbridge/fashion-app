import { Map } from 'immutable';

const initialRegistration = new Map({
  errors: null,
  step: 1
});

const registrationForm = (state = initialRegistration, action) => {
  switch (action.type) {
    case 'ERRORS_REGISTRATION':
      return state.set('errors', action.message);
    default:
      return state;
  }
};

export default registrationForm;
