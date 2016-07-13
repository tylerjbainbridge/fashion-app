import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class User extends Component {
  constructor(props){
    super(props);
    autoBind(this);
    this.username = this.props.username;
  }

  componentDidMount(){
    if(this.username.trim() == ''){
      this.props.getLoggedUser();
    }
  }

  render(){
    return (
      <h1>{this.props.username}</h1>
    )
  }
}
