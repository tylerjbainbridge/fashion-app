import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class loginForm extends Component {
  render() {
    const { fields: { username, password }, handleSubmit, submitting, login, redirect } = this.props;
    return (
      <div className="parentLogin">
        <form className="childLogin form" onSubmit={ handleSubmit(login.bind(null, redirect)) }>
          <div>
            {/*<label>Username</label>*/}
            <div>
              <input type="text" placeholder="Username" {...username}/>
            </div>
            <label className='logErr'>{username.touched && username.error && <div>{username.error}</div>}</label>
          </div>

          <div>
            {/*<label>Password</label>*/}
            <div>
              <input type="password" placeholder="Password" {...password}/>
            </div>
            <label className='logErr'>{password.touched && password.error && <div>{password.error}</div>}</label>
          </div>

          <div className="formButtons">
            <button type="submit" disabled={submitting}>
              {submitting ? <i/> : <i/>} Submit
            </button>
            <button type="button">
              <Link to='/'>
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

loginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}
