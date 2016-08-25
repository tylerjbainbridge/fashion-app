import React, { PropTypes } from 'react';

const PreviewImage = (props) => {
  const { image } = props;
  return (
    <div className="UploadProPicPreview">
      <img src={image} alt="preview" />
    </div>
  );
};

PreviewImage.propTypes = {
  image: PropTypes.string,
};

export default PreviewImage;
