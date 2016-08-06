import React, { PropTypes } from 'react';

function Input(props) {
  const {
    type,
    placeHolder,
    reduxFormProp,
  } = props;

  return (
    <div>
      <div>
        <input type={type} placeholder={placeHolder} {...reduxFormProp} />
      </div>
      <label className="logErr" htmlFor={placeHolder}>
        {reduxFormProp.touched && reduxFormProp.error && <div>{reduxFormProp.error}</div>}
      </label>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  reduxFormProp: PropTypes.object.isRequired,
};

export default Input;
