import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Input from '../Forms/Input';

function loginForm(props) {
  const {
    fields: {
      username,
      password,
    },
    handleSubmit,
    submitting,
    login,
    redirect,
  } = props;

  return (
    <div className="parentLogin">
      <form className="childLogin form" onSubmit={handleSubmit(login.bind(null, redirect))}>
        <Input
          type="text"
          placeHolder="Enter Username"
          reduxFormProp={username}
        />
        <Input
          type="password"
          placeHolder="Enter Password"
          reduxFormProp={password}
        />
        <div className="formButtons">
          <button type="submit" disabled={submitting}>
            {submitting ? <i /> : <i />} Submit
          </button>
          <button type="button">
            <Link to="/">
              Cancel
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

loginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  redirect: PropTypes.string,
};

export default loginForm;
