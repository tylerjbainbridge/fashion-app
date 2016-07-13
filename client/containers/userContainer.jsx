import { connect } from 'react-redux';
import { getLoggedUser } from '../actions';
import User from '../components/User';
import { List, Map, fromJS } from 'immutable';

const mapStateToProps = (state) => {
  let username = state.user.get('username') || '';
  return {
    username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoggedUser: () => {
      dispatch(getLoggedUser())
    }
  }
}


const userCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

export default userCont;
