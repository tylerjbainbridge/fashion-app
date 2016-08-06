import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Input from '../../Forms/Input';

const RegistrationFormContents = (props) => {
  const {
    fields: {
      username,
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
     },
     submitting,
   } = props;
  return (
    <div>
      <Input
        type="text"
        placeHolder="Enter Username"
        reduxFormProp={username}
      />

      <Input
        type="text"
        placeHolder="Enter First Name"
        reduxFormProp={firstName}
      />

      <Input
        type="text"
        placeHolder="Enter Last Name"
        reduxFormProp={lastName}
      />

      <Input
        type="text"
        placeHolder="Enter Email"
        reduxFormProp={email}
      />

      <Input
        type="password"
        placeHolder="Enter Password"
        reduxFormProp={password}
      />

      <Input
        type="password"
        placeHolder="Confirm Password"
        reduxFormProp={confirmPassword}
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
    </div>
  );
};

RegistrationFormContents.propTypes = {
  fields: PropTypes.object.isRequired,
  asyncValidating: PropTypes.bool,
  submitting: PropTypes.bool.isRequired,
};

export default RegistrationFormContents;
