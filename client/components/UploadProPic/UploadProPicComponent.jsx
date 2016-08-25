import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import Modal from 'react-modal';
import PreviewImage from './PreviewProPic';

// import ReactCrop from 'react-image-crop';

class UploadProfilePicture extends Component {

  componentDidMount() {
    this.props.resetUploadPage();
  }

  onDrop(file) {
    this.getDataUrl(file[0]);
    this.props.fields.propic.value = file;
    this.imageOriginal = file;
  }

  getDataUrl(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        this.props.imageChanged(reader.result);
      }
    };
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
      serverError,
      deleteImage,
      modal,
      closeModal,
      closePreviewModal,
    } = this.props;
    const isModalOpen = (modal === 'OPEN');
    return (
      <div className="parentLogin">
          <form
            className="childLogin form"
            encType="multipart/form-data"
            onSubmit={
              handleSubmit(upload.bind(null, this.imageOriginal))
            }
          >
            <label className="logErr">
              {serverError && <div className="logErr">{serverError}</div>}
            </label>
            { (image == null) ?
              <div>
                <div>
                  <Dropzone
                    onDrop={this.onDrop.bind(this)}
                    multiple={false}
                    style={{
                      height: '50px',
                      border: '0.5px solid black',
                      padding: '20px',
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <b>Click to Browse</b>
                      <br />or<br />
                      <b>Drag and Drop</b>
                    </div>
                  </Dropzone>
                </div>
                <label htmlFor="propic" className="logErr">
                  {propic.touched && propic.error && <div>{propic.error}</div>}
                </label>
              </div>
            :
              <PreviewImage image={image} />
              <div className="formButtons formButtonsCont">
                <div className="innerFormButtons">
                  <button type="submit" disabled={submitting}>
                    { submitting ? <i /> : <i /> } Upload
                  </button>
                  <button onClick={deleteImage} >
                    Cancel
                  </button>
                </div>
              </div>
             }
          </form>
      </div>
    );
  }
}
// <input
//   type="file"
//   placeholder="propic"
//   {...propic}
//   value={null}
//   onChange={(e) => {
//     const file = e.target.files[0];
//     this.getDataUrl(file);
//   }}
// />

UploadProfilePicture.propTypes = {
  image: PropTypes.string,
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  imageChanged: PropTypes.func.isRequired,
  serverError: PropTypes.string,
  resetUploadPage: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  deleteImage: PropTypes.func.isRequired,
  modal: PropTypes.string.isRequired,
  closePreviewModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  openPreviewModal: PropTypes.func.isRequired,
};

export default UploadProfilePicture;
