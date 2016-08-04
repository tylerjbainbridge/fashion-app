import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import FormContent from './Components/FormContentComponent';

export default class registrationForm extends Component {
  render() {
    const { handleSubmit, submitting, register, step } = this.props;
    return (
      <div className="parentLogin">
        <form className="childLogin form" onSubmit={handleSubmit(register)}>
          <FormContent {...this.props} />
          {/*{(step == 1) ?
          <StepOne {...this.props} submitting={submitting}/> :
          <StepTwo
            {...this.props}
            submitting={submitting}
            /> }*/}

      </form>

      </div>
    )
  }
}

registrationForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}
