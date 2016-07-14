import { connect } from 'react-redux'
import { loginFormActions } from '../actions'
import LoginForm from '../components/Login'

const { attemptLogin, clearFormState } = loginFormActions;

const mapStateToProps = (state) => {
  return {
    form: state.loginForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitHandler: (form) => {
      dispatch(attemptLogin(form));
    },
    clearFormState: () => {
      dispatch(clearFormState('LOGIN'));
    }
  }
}

const LoginFormCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginFormCont
