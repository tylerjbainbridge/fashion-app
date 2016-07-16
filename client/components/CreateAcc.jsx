import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import { forIn } from 'lodash';

export default class RegistrationForm extends Component {
  constructor(props){
    super(props);
    autoBind(this);
    this.username = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';

    this.errors = false;
  }

  validateForm(form){
    forIn(form, (val, key) => {
      this.handleChange(key.toUpperCase(), val);
    });

    setTimeout(()=>{
      let disabled = false;
      forIn(form, (val, key) => {
        if(this.props.form.get(key) != null){
          disabled = true;
        }
      });
      this.disabled = disabled;
    }, 10);

  }

  handleSubmit(e){
    e.preventDefault();
    let form = {
      username: this.username.value,
      password: this.password.value,
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      email: this.email.value
    }

    this.validateForm(form);

    if(!this.errors){
      this.props.submitHandler(form);
    }
    
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
        <p>Username Errors: {this.props.form.get('username') || ''}</p>
        <p>Password Errors: {this.props.form.get('password') || ''}</p>

        <p>color: {this.props.form.get('username_color')}</p>
        <form action="" onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="username"
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

        <input type="first_name" name="first_name" placeholder="first name"
          style={ { 'borderColor': this.props.form.get('first_name_color') } }
          ref={node => {
            this.first_name = node
          }}
          onBlur={()=>{
            this.handleChange('FIRST_NAME', this.first_name.value.trim());
          }}
          ></input>

        <input type="last_name" name="last_name" placeholder="last name"
            style={ { 'borderColor': this.props.form.get('last_name_color') } }
            ref={node => {
              this.last_name = node
            }}
            onBlur={()=>{
              this.handleChange('LAST_NAME', this.last_name.value.trim());
            }}
            ></input>

        <input type="email" name="email" placeholder="email"
          style={ { 'borderColor': this.props.form.get('email_color') } }
          ref={node => {
            this.email = node
          }}
          onBlur={()=>{
            this.handleChange('EMAIL', this.email.value.trim());
          }}
          ></input>

        <input type="password" name="password" placeholder="password"
          style={ { 'borderColor': this.props.form.get('password_color') } }
          ref={node => {
            this.password = node
          }}
          onBlur={()=>{
            this.handleChange('PASSWORD', this.password.value.trim());
          }}
          ></input>

        <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}
