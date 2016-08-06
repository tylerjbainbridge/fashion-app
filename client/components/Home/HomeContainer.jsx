import { connect } from 'react-redux';
import { getLoggedUser } from '../User/UserActions';
import { changeStepTo } from '../Registration/RegistrationActions';
import Home from './HomeComponent';

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
    backToStepOne: () => {
      dispatch(changeStepTo(1));
    },
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
