import { connect } from 'react-redux';
import { getUserProfile } from './ProfileActions';
import { getLoggedUser } from '../User/UserActions';
import Profile from './ProfileComponent';

const mapStateToProps = (state, { params }) => {
  return {
    username: state.user.get('username'),
    profile: state.profile,
    params
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (username) => {
      dispatch(getUserProfile(username));
    }
  }
};

const profileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default profileContainer;
