import { connect } from 'react-redux';
import { getLoggedUser } from '../User/UserActions';
import App from './AppComponent';

const mapStateToProps = state => {
  return {
    userid: state.user.get('userid')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLoggedUser: () => {
      dispatch(getLoggedUser());
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
