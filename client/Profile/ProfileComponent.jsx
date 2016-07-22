import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.username = this.props.params.username;
  }

  componentWillMount() {
    this.props.getProfile(this.username);
  }

  render() {
    return (
      <h1>hello</h1>
    )
  }
}
