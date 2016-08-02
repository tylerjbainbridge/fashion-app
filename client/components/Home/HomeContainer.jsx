import { connect } from 'react-redux';
import { getLoggedUser } from '../User/UserActions';
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
    }
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
