import React, { Component } from 'react';

export default class User extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.username == null){
      this.props.getLoggedUser();
    }
  }

  render(){
    return (
      <h1>{this.props.username}</h1>
    )
  }
}
