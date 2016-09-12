import React, { PropTypes, Component } from 'react';
// import { Link } from 'react-router';
import Modal from 'react-modal';
import UploadProfilePicture from '../../UploadProPic/UploadProPicContainer';

class YourProPic extends Component {
  constructor(props) {
    super(props);
  }

  // afterOpenModal() {
  // // references are now sync'd and can be accessed.
  //   this.refs.subtitle.style.color = '#f00';
  // }

  render() {
    const { user: { username, profilePicture },
    imageLoaded, imageError, status, modal, closeModal } = this.props;
    const alt = `${username}'s profile picture.'`;
    const imageURL = (profilePicture ? profilePicture.imageURL : null);
    const error = (status === 'ERROR' || !imageURL) ? 'block' : 'none';
    const displayImage = (status === 'LOADING' || status === 'ERROR') ? 'none' : 'block';
    const isModalOpen = (modal === 'OPEN');

    return (
      <div className="ProfileProPicContainer">
        <div onClick={this.props.openModal}>
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
        <Modal
          style={{
            overlay: {
              background: 'rgba(255, 255, 255, .25); ',
            },
            content: {
              color: 'black',
              width: '800px',
              height: '75%',
              margin: 'auto',
            },
          }}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        >
          <span className="closeModal" onClick={closeModal}>X</span>
          <UploadProfilePicture />
        </Modal>
      </div>
    );
  }
}

YourProPic.propTypes = {
  imageLoaded: PropTypes.func.isRequired,
  imageError: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modal: PropTypes.string.isRequired,
};

export default YourProPic;
