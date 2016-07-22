import { connect } from 'react-redux';
import { getLoggedUser } from './UserActions';
import User from './UserComponent';

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

const userCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default userCont;
