import { connect } from 'react-redux';
import NavBar from './NavBarComponent';
import { logoutUser } from '../User/UserActions';

require('./NavBarStyles/style.scss');

const mapStateToProps = state => {
  return {
    username: state.user.get('username')
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      return dispatch(logoutUser());
    }
  }
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;
