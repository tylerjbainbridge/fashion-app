import { connect } from 'react-redux'
import { attemptRegistration, registrationFormChange } from '../actions'
import CreateAcc from '../components/CreateAcc'
import { List, Map, fromJS } from 'immutable';

const mapStateToProps = (state) => {
  return {
    form: state.registrationForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitHandler: (form) => {
      dispatch(attemptRegistration(form))
    },
    registrationFormChange: (type, value) => {
      dispatch(registrationFormChange(type, value))
    },
    clearFormState: () => {
      dispatch(clearFormState('REGISTRATION'));
    }
  }
}

const RegFormCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAcc)

export default RegFormCont
