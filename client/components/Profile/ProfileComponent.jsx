import React, { Component, PropTypes } from 'react';
import UserInfo from './Components/UserInfo';
import ProPic from '../ProPic/ProPicContainer';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.username = this.props.params.username;
  }

  componentWillMount() {
    this.props.getProfile(this.username);
  }

  componentWillReceiveProps(nextProps) {
    const nextPath = nextProps.params.username;
    const currentPath = this.props.params.username;
    const diffPaths = (nextPath !== currentPath);

    if (diffPaths) {
      this.username = nextProps.params.username;
      this.props.getProfile(nextProps.params.username);
    }
  }

  displayNotFound() {
    return (
      <h1>
        { this.props.error }
      </h1>
    );
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
      <div className="topProfileContainerParent">
        <div className="topProfileContainer">
          <ProPic
            username={this.props.user.username}
            imageURL={this.props.user.profilePicture.imageURL}
          />
          <UserInfo
            user={this.props.user}
            yourProfile={this.props.yourProfile}
          />
        </div>
      </div>
   );
  }
}

Profile.propTypes = {
  yourProfile: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  error: PropTypes.string,
  user: PropTypes.object,
  username: PropTypes.string,
};

export default Profile;
