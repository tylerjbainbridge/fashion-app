import { connect } from 'react-redux';
import { getLoggedUser } from '../User/UserActions';
import App from './AppComponent';

function mapStateToProps(state) {
  return {
    userid: state.user.get('userid'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLoggedUser: () => {
      dispatch(getLoggedUser());
    },
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
