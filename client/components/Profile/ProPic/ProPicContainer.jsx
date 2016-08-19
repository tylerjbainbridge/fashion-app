import { connect } from 'react-redux';
import { imageLoaded, imageError } from './ProPicActions';
import Profile from './ProPicComponent';

function mapStateToProps(state) {
  return {
    status: state.propic.get('status'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    imageLoaded: () => dispatch(imageLoaded()),
    imageError: () => dispatch(imageError()),
  };
}

const profileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default profileContainer;
