import React, { Component, PropTypes } from 'react';
import UserInfo from './Components/UserInfo';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.username = this.props.params.username;
  }

  componentWillMount() {
    this.props.getProfile(this.username)
      .then(() => {
        this.isThisYourProfile();
      });
  }

  componentWillReceiveProps(nextProps) {
    const nextPath = nextProps.params.username;
    const currentPath = this.props.params.username;
    const diffPaths = (nextPath !== currentPath);

    if (diffPaths) {
      this.username = nextProps.params.username;
      this.props.getProfile(nextProps.params.username)
      .then(() => {
        this.isThisYourProfile();
      });
    }
  }

  displayNotFound() {
    return (
      <h1>
        { this.props.error }
      </h1>
    );
  }

  isThisYourProfile() {
    if (this.props.user.username === this.props.username) {
      this.yourProfile = true;
    } else {
      this.yourProfile = false;
    }
  }

  render() {
    if (!this.props.user.username) {
      return (
        <h1 style={{ textAlign: 'center' }} >
          { this.props.error }.
        </h1>
      );
    }
    return (
      <UserInfo
        user={this.props.user}
        yourProfile={this.yourProfile}
      />
   );
  }
}

Profile.propTypes = {
  params: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  user: PropTypes.object,
  username: PropTypes.string,
};

export default Profile;
