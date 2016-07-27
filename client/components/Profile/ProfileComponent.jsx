import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.username = this.props.params.username;
  }

  componentWillMount() {
    this.props.getProfile(this.username).then(() => {
      this.isThisYourProfile();
      console.log(this.props.params.username, this.props.username);
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.username != this.props.profile.get('username')){
      this.username = nextProps.params.username;
      this.props.getProfile(nextProps.params.username).then(() => {
        this.isThisYourProfile();
      });
    }
  }

  isThisYourProfile(){
    if(this.props.profile.get('username') == this.props.username) {
      this.yourProfile = true;
    }else{
      this.yourProfile = false;
    }
  }

  render() {
    return (
      <div>
        <h1>username: {this.props.profile.get('username')}</h1>
        <h1>firstname: {this.props.profile.get('firstName')}</h1>
        <h1>lastname: {this.props.profile.get('lastName')}</h1>
        <h1>email: {this.props.profile.get('email')}</h1>
        {this.yourProfile ? <h1>you</h1> : <h1>not your</h1>}
      </div>
    )
  }
}
