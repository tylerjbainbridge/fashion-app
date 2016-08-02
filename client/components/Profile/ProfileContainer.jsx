import { connect } from 'react-redux';
import { getUserProfile } from './ProfileActions';
import { getLoggedUser } from '../User/UserActions';
import Profile from './ProfileComponent';

const mapStateToProps = (state, { params }) => {
  return {
    username: state.user.get('username'),
    error: state.profile.get('error'),
    user: state.profile.get('user'),
    yourProfile: state.user.get('username') == params.username,
    params
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (username) => {
      return dispatch(getUserProfile(username));
    }
  }
};

const profileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default profileContainer;
