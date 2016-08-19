import React, { PropTypes } from 'react';
// import FontAwesome from 'react-fontawesome';

const ProPic = (props) => {
  const { user: { username, profilePicture }, imageLoaded, imageError, status } = props;
  const alt = `${username}'s profile picture.'`;
  const imageURL = (profilePicture ? profilePicture.imageURL : null);
  const displayImage = (status === 'LOADING' || status === 'ERROR') ? 'none' : 'block';
  const error = (status === 'ERROR' || !imageURL) ? 'block' : 'none';
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
      <div
        style={{ display: error }}
        className="errorProPic"
      >
        {username[0].toUpperCase()}
      </div>
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
  user: PropTypes.object.isRequired,
  // imageURL: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.null,
  // ]),
};

export default ProPic;
