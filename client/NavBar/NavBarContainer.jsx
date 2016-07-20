import { connect } from 'react-redux';
import NavBar from './NavBarComponent';
require('./NavBarStyles/style.scss');

const mapStateToProps = state => {
  return {
    username: state.user.get('username')
  }
};

const NavBarContainer = connect(
  mapStateToProps
)(NavBar);

export default NavBarContainer;
