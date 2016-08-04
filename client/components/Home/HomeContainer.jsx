import { connect } from 'react-redux';
import { getLoggedUser } from '../User/UserActions';
import { changeStepTo } from '../Registration/RegistrationActions';
import Home from './HomeComponent';

const mapStateToProps = state => {
  return {
    userid: state.user.get('userid')
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getLoggedUser: () => {
      dispatch(getLoggedUser());
    },
    backToStepOne: () => {
      dispatch(changeStepTo(1));
    }
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
