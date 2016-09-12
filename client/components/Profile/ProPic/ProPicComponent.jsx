import React, { PropTypes } from 'react';
import YourProPic from './YourProPic';
import NotYourProPic from './NotYourProPic';

// import FontAwesome from 'react-fontawesome';

const ProPic = (props) => {
  const { you } = props;

  if (you) {
    return (
      <YourProPic {...props} />
    );
  }
  return (
    <NotYourProPic {...props} />
  );
};

ProPic.propTypes = {
  you: PropTypes.bool.isRequired,
};

export default ProPic;
