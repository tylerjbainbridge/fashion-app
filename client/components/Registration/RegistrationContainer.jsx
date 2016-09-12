import { reduxForm } from 'redux-form';
import { registrationValidation } from './RegistrationValidation';
import { attemptRegistration, checkUniqueUsername } from './RegistrationActions';

import Registration from './RegistrationComponent';

export const fields = [
  'username',
  'password',
  'firstName',
  'lastName',
  'confirmPassword',
  'email',
  'propic',
];

const register = (form, dispatch) => {
  dispatch(
    attemptRegistration(form)
  );
};

const checkUsername = (form, dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(
      checkUniqueUsername(form.username)
    ).then(resolve).catch(reject);
  });


export default reduxForm({
  form: 'FormContent',
  fields,
  register,
  asyncValidate: checkUsername,
  asyncBlurFields: ['username'],
  validate: registrationValidation,
})(Registration);
