import { connect } from 'react-redux';
import NavBar from './NavBarComponent';
import { logoutUser, clickLogin } from '../User/UserActions';

require('./NavBarStyles/style.scss');

function mapStateToProps(state) {
  return {
    username: state.user.get('username'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutUser()),
    clickLogin: (redirect) => dispatch(clickLogin(redirect)),
  };
}

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;
