import React, { PropTypes, Component } from 'react';
import Cropper from 'cropperjs';

require('./styles/cropper.scss');

class PreviewImage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const image = document.getElementById('image');
    const aspectRatio = 1 / 1;
    const crop = (e) => {
      // this.props.setCrop(e);
      this.props.updateCrop(e.detail);
    };

    image.addEventListener('cropend', (e) => {
      console.log('end');
    });

    this.cropper = new Cropper(
      image, {
        aspectRatio,
        crop,
      }
    );

    this.cropper.setDefaults({
      checkOrientation: true,
      background: false,
    });
  }

  render() {
    const imageSrc = this.props.image;
    return (
      <div className="UploadProPicPreview">
        <img id="image" src={imageSrc} alt="preview" />
      </div>
    );
  }
}

PreviewImage.propTypes = {
  image: PropTypes.string,
};

export default PreviewImage;
