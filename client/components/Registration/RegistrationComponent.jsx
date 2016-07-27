import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

export default class registrationForm extends Component {
  render() {
    const { fields: { username, firstName, lastName, password, confirmPassword, email }, handleSubmit, submitting, register, asyncValidating } = this.props;
    return (
      <div className="parentLogin">
        <form className="childLogin form" onSubmit={handleSubmit(register)}>
          <div>
            <div>
              <input type="text" placeholder="Username" {...username}/>
              {asyncValidating === 'username' && <i /* spinning cog *//>}
            </div>
            <label className='logErr'>{username.touched && username.error && <div>{username.error}</div>}</label>
          </div>

          <div>
            <div>
              <input type="text" placeholder="First Name" {...firstName}/>
            </div>
            <label className='logErr'>{firstName.touched && firstName.error && <div>{firstName.error}</div>}</label>
          </div>

          <div>
            <div>
              <input type="text" placeholder="Last Name" {...lastName}/>
            </div>
            <label className='logErr'>{lastName.touched && lastName.error && <div>{lastName.error}</div>}</label>
            <label className='regErr'>{confirmPassword.touched && confirmPassword.error && <div>{confirmPassword.error}</div>}</label>
          </div>

          <div>
            <div>
              <input type="text" placeholder="Email" {...email}/>
            </div>
            <label className='logErr'>{email.touched && email.error && <div>{email.error}</div>}</label>
          </div>

          <div>
            <div>
              <input type="password" placeholder="Password" {...password}/>
            </div>
            <label className='logErr'>{password.touched && password.error && <div>{password.error}</div>}</label>
          </div>

          <div>
            <div>
              <input type="password" placeholder="Confirm Password" {...confirmPassword}/>
            </div>
            <label className='logErr'>{confirmPassword.touched && confirmPassword.error && <div>{confirmPassword.error}</div>}</label>
          </div>

        <section>
          <div id="regBtnCont">
          <button className='registerButtons' type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          </div>
          <div id="cancelBtnCont">
            <button id="cancelBtn" className='registerButtons' type="button">
            <Link to='/'>
              Cancel
            </Link>
            </button>
          </div>
        </section>
      </form>

      </div>
    )
  }
}

registrationForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}
