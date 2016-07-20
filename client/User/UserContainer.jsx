import { connect } from 'react-redux';
import { getLoggedUser } from './UserActions';
import User from './UserComponent';

const mapStateToProps = state => {
  return {
    username: state.user.get('username')
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getLoggedUser: () => {
      dispatch(getLoggedUser());
    }
  }
};

const userCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default userCont;
