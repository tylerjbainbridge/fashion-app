import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

export default class registrationForm extends Component {
  render() {
    const { fields: { username, password, confirmPassword }, handleSubmit, submitting, register, asyncValidating } = this.props;
    return (
      <div className="parentRegister">
      <form className="childRegister" onSubmit={handleSubmit(register)}>
          <div>
            <input type="text" placeholder="Username" {...username}/>
            {asyncValidating === 'username' && <i /* spinning cog *//>}
          </div>
          <label className='regErr'>{username.touched && username.error && <div>{username.error}</div>}</label>
          <div>
            <input type="password" placeholder="Password" {...password}/>
          </div>
          <label className='regErr'>{username.touched && username.error && <div>{username.error}</div>}</label>
          <div>
            <input type="password" placeholder="Confirm Password" {...confirmPassword}/>
          </div>
          <label className='regErr'>{confirmPassword.touched && confirmPassword.error && <div>{confirmPassword.error}</div>}</label>
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
