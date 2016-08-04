import React, { Component } from 'react';
import { Link } from 'react-router';

export default class StepOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields: { username, firstName, lastName, password, confirmPassword, email }, asyncValidating, submitting, nextStep } = this.props;
    return (
      <div>
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
        {/*<div className="formButtons">
          <a onClick={() => nextStep()}>
            Next
          </a>
        </div>*/}
      </div>
    )
  }
}
