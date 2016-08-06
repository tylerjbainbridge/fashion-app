import React, { PropTypes } from 'react';
import FormContent from './Components/FormContentComponent';

const registrationForm = (props) => {
  const { handleSubmit, register } = props;
  return (
    <div className="parentLogin">
      <form className="childLogin form" onSubmit={handleSubmit(register)}>
        <FormContent {...props} />
      </form>
    </div>
  );
};

registrationForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

export default registrationForm;
