import { connect } from 'react-redux';
import { getUserProfile } from './ProfileActions';
import Profile from './ProfileComponent';

function mapStateToProps(state, { params }) {
  return {
    username: state.user.get('username'),
    error: state.profile.get('error'),
    user: state.profile.get('user'),
    yourProfile: (state.user.get('username') === state.profile.get('user').username),
    params,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: (username) => dispatch(getUserProfile(username)),
  };
}

const profileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default profileContainer;
