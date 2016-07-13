import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

export default class RegistrationForm extends Component {
  constructor(props){
    super(props);
    autoBind(this);
    this.username = '';
    this.password = '';
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.submitHandler({
      username: this.username.value,
      password: this.password.value
    });
  }

  handleChange( type, value ){
    this.props.registrationFormChange( type, value );
  }

  render() {
    return (
      <div>
        <Link to='/'>
          Home
        </Link>

        <h3>Register: {this.props.form.get('state')}</h3>
        <p>Errors: {this.props.form.get('username') || ''}</p>

        <p>color: {this.props.form.get('username_color')}</p>
        <form action="" onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="enter username"

            style={
              {
                'borderColor': this.props.form.get('username_color')
              }
            }

            onBlur={()=>{
              this.handleChange('USERNAME', this.username.value.trim());
            }}

            ref={node => {
            this.username = node
            }}
          >
        </input>

        <input type="password" name="password" placeholder="enter password" ref={node => {
            this.password = node
          }}></input>

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}
