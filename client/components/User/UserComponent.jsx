import React, { Component, PropTypes } from 'react';

class User extends Component {
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
    );
  }
}

User.propTypes = {
  params: PropTypes.object.isRequired,
  username: PropTypes.string,
  getProfile: PropTypes.func.isRequired,
};

export default User;
