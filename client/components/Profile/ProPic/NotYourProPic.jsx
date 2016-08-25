import React, { PropTypes } from 'react';

const NotYourProPic = (props) => {
  const { user: { username, profilePicture }, imageLoaded, imageError, status } = props;
  const alt = `${username}'s profile picture.'`;
  const imageURL = (profilePicture ? profilePicture.imageURL : null);
  const error = (status === 'ERROR' || !imageURL) ? 'block' : 'none';
  const displayImage = (status === 'LOADING' || status === 'ERROR') ? 'none' : 'block';

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

NotYourProPic.propTypes = {
  imageLoaded: PropTypes.func.isRequired,
  imageError: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default NotYourProPic;
