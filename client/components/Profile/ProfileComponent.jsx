import React, { Component } from 'react';
import UserInfo from './Components/UserInfo';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.username = this.props.params.username;
  }

  displayNotFound() {
    return (
      <h1>{ this.props.errors }</h1>
    )
  }

  componentWillMount() {
    this.props.getProfile(this.username)
      .then(() => {
        this.isThisYourProfile();
      })
  }

  componentWillReceiveProps(nextProps) {
    let nextPath    = nextProps.params.username;
    let currentPath = this.props.params.username;
    let diffPaths = (nextPath != currentPath);

    if (diffPaths) {
      this.username = nextProps.params.username;

      this.props.getProfile(nextProps.params.username)
      .then(() => {
        this.isThisYourProfile();
      });
    }
  }

  isThisYourProfile(){
    if(this.props.user.username == this.props.username) {
      this.yourProfile = true;
    }else{
      this.yourProfile = false;
    }
  }

  render() {
    if(!this.props.user.username){
      return (
        <h1 style={{ 'textAlign': 'center' }} >{ this.props.error }.</h1>
      )
    } else {
      return (
        <UserInfo
          user={this.props.user}
          yourProfile={this.yourProfile}
        />
      )
    }
  }
}

/**
 *         <div>
           <h1>username: { this.props.user.username }</h1>
           <h1>firstname: { this.props.user.firstName }</h1>
           <h1>lastname: { this.props.user.lastName }</h1>
           <h1>email: { this.props.user.email }</h1>
           { this.yourProfile ? <h1>you</h1> : <h1>not your</h1> }
         </div>
 */
