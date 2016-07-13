import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

export default class RegistrationForm extends Component {
  constructor(props){
    super(props);
    autoBind(this);
    this.username = '';
    this.password = '';
    console.log(this.props.form.get('state'));
  }

  componentWillMount(){
    this.username = '';
    this.password = '';
    this.props.clearFormState();
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.submitHandler({
      username: this.username.value,
      password: this.password.value
    });
  }

  render() {
    return (
      <div>
        <Link to='/'>
          Home
        </Link>
        <h3>Login: {this.props.form.get('state')}</h3>
        <p>{this.props.form.get('errors')}</p>
        <form action="" onSubmit={this.handleSubmit}>

          <input type="text" name="username" placeholder="enter username"
            ref={node => {
            this.username = node
            }}
          ></input>

        <input type="password" name="password" placeholder="enter password" ref={node => {
            this.password = node
          }}></input>

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}
