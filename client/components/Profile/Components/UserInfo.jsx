import React, { Component} from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, firstName, lastName, email } = this.props.user;
    return (
      <div className="UserInfoContainer">
        <div className="UserInfo">
          <div className="profileUserName"> { username } </div>
          <div className="profileName">{ lastName }, { firstName }</div>
          <span>{this.props.yourProfile ? <p>you</p> : <p>not you</p>}</span>
        </div>
      </div>
    )
  }
}

export default UserInfo;
