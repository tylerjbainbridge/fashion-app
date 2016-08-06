import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ReactCrop from 'react-image-crop';

class UploadProfilePicture extends Component {
  getDateUrl(file, imageChanged) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        imageChanged(reader.result);
      }
    };
  }

  setCrop(cropChanged, newCrop) {
    cropChanged(newCrop);
  }

  cropImage() {
    return (
      <ReactCrop
        crop={this.props.crop}
        src={this.props.image}
        onComplete={this.setCrop.bind(null, this.props.cropChanged)}
      />
 );
  }

  render() {
    const {
      fields: {
        propic,
      },
      submitting,
      image,
      handleSubmit,
      upload,
      imageChanged,
      crop,
    } = this.props;

    return (
      <div className="parentLogin">
        <form className="childLogin form" onSubmit={handleSubmit(upload.bind(null, crop))}>
          <div>
            { image ? this.cropImage() : <br /> }
            <div>
              <input
                type="file"
                placeholder="First Name"
                {...propic}
                value={null}
                onChange={(e) => {
                  const file = e.target.files[0];
                  this.getDateUrl(file, imageChanged);
                }}
              />
            </div>
            <label htmlFor="propic" className="logErr">
              {propic.touched && propic.error && <div>{propic.error}</div>}
            </label>
          </div>
          <div className="formButtons">
            <button type="submit" disabled={submitting}>
              { submitting ? <i /> : <i /> } Submit
            </button>
            <button type="button">
              <Link to="/">
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

UploadProfilePicture.propTypes = {
  image: PropTypes.object,
  fields: PropTypes.func.isRequired,
  submitting: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  crop: PropTypes.object.isRequired,
  imageChanged: PropTypes.func.isRequired,
};

export default UploadProfilePicture;
