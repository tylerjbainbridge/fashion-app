import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import ReactCrop from 'react-image-crop';

class UploadProfilePicture extends Component {

  // getDateUrl(file, imageChanged) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     if (reader.result) {
  //       imageChanged(reader.result);
  //     }
  //   };
  // }

 //  setCrop(cropChanged, newCrop) {
 //    console.log(newCrop);
 //    cropChanged(newCrop);
 //  }
 //
 //  cropImage() {
 //    return (
 //      <ReactCrop
 //        crop={this.props.crop}
 //        src={this.props.image}
 //        onComplete={this.setCrop.bind(null, this.props.cropChanged)}
 //      />
 // );
 //  }

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
      serverError,
    } = this.props;

    return (
      <div className="parentLogin">
        <form
          className="childLogin form"
          encType="multipart/form-data"
          onSubmit={
            handleSubmit(upload)
          }
        >
        <label className="logErr">
          {serverError && <div className="logErr">{serverError}</div>}
        </label>
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
                  console.log(file);
                  // this.getDateUrl(file, imageChanged);
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
  image: PropTypes.string,
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  imageChanged: PropTypes.func.isRequired,
  serverError: PropTypes.string,
};

export default UploadProfilePicture;
