import { connect } from 'react-redux';
import { getLoggedUser, getUserProfile } from './UserActions';
import User from './UserComponent';

function mapStateToProps(state, { params }) {
  return {
    username: state.user.get('username'),
    profile: state.profile,
    params,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: (username) => dispatch(getUserProfile(username)),
  };
}

const userCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default userCont;
