import { connect } from 'react-redux';
import { imageLoaded, imageError, openModal, closeModal } from './ProPicActions';
import Profile from './ProPicComponent';

function mapStateToProps(state) {
  return {
    status: state.propic.get('status'),
    modal: state.propic.get('modal'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    imageLoaded: () => dispatch(imageLoaded()),
    imageError: () => dispatch(imageError()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
}

const profileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default profileContainer;
