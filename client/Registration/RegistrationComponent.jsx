import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

export default class registrationForm extends Component {
  render() {
    const { fields: { username, password, confirmPassword }, handleSubmit, submitting, register, asyncValidating } = this.props;
    return (
      <form onSubmit={handleSubmit(register)}>
        <div>
          <label>Username</label>
          <div>
            <input type="text" placeholder="Username" {...username}/>
            {asyncValidating === 'username' && <i /* spinning cog *//>}
          </div>
          {username.touched && username.error && <div>{username.error}</div>}
        </div>

        <div>
          <label>Password</label>
          <div>
            <input type="password" placeholder="Password" {...password}/>
          </div>
          {username.touched && username.error && <div>{username.error}</div>}
        </div>

        <div>
          <label>Confirm Password</label>
          <div>
            <input type="password" placeholder="Confirm Password" {...confirmPassword}/>
          </div>
          {confirmPassword.touched && confirmPassword.error && <div>{confirmPassword.error}</div>}
        </div>

        <div>
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
    )
  }
}

registrationForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}
