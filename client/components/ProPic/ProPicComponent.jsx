import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const ProPic = (props) => {
  const { username, imageURL, imageLoaded, imageError, status } = props;
  const alt = `${username}'s profile picture.'`;
  const displayImage = (status === 'loading') ? 'none' : 'block';
  // const displaySpinner = (status === 'loaded') ? 'none' : 'block';
  return (
    <div className="ProfileProPicContainer">
      <img
        className="ProfileProPic"
        style={{ display: displayImage }}
        src={imageURL}
        onLoad={imageLoaded}
        onError={imageError}
        alt={alt}
      />
    </div>
  );
};

// <div
//   className="ProPicSpinner"
//   style={{ display: displaySpinner }}
// >
//   <FontAwesome name="spinner" spin />
// </div>

ProPic.propTypes = {
  imageLoaded: PropTypes.func.isRequired,
  imageError: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ProPic;
